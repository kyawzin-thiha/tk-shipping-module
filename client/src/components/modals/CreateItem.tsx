import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import CloseIcon from '@mui/icons-material/Close';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import { Checkbox } from "@/components/ui/checkbox"
  
  const shipmethod = [
    {
      value: "courier",
      label: "Courier",
    },
    {
      value: "tkvan",
      label: "TK Van",
    },
    {
      value: "callforpickup",
      label: "Call For Pickup",
    },
  ]

function CreateItem({ onClose }) {
    const handleClose = () => {
        onClose();
    };
    
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleEndDateSelect = (date: Date) => {
        setEndDate(date);
    };

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

  return (
    <Dialog open={true} onClose={handleClose} className="custom-dialog ">
      <DialogContent className="custom-dialog-content sm:min-w-[460px] ">
        <DialogHeader className="custom-dialog-header">
          <DialogTitle className="custom-dialog-title">
            Create Item
          </DialogTitle>
          <Button className="close-button" onClick={handleClose}>
            <CloseIcon />
          </Button>
          <DialogDescription className="custom-dialog-description">
            Enter item details. Click save when you're done.
          </DialogDescription>
          <br/>
          <div className="flex items-center space-x-2">
            <Checkbox id="addressbook" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Address Book
            </label>
          </div>
        </DialogHeader>
        
        <br/>
        {/* Your dialog content goes here */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 input-style-modal">
            <Label htmlFor="customer">Customer</Label>
            <Input id="customer" type="text" placeholder=""/>
          </div>
          <div className="input-style-modal">
            <Label htmlFor="billing-address">Billing Address</Label>
            <Input id="billing-address" type="text"/>
          </div>
          <div className="input-style-modal">
            <Label htmlFor="shipping-address">Shipping Address</Label>
            <Input id="shipping-address" type="text" placeholder=""/>
          </div>
          <div className="input-style-modal">
            <Label htmlFor="shipping-method">Shipping Method</Label>
            <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="button-style flex items-center justify-between"
                            style={{ minWidth: '225px', maxWidth: '225px' }}
                        >
                            <span className="text-left">
                                {value
                                    ? shipmethod.find((customer) => customer.value === value)?.label
                                    : "Select..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="popover-content-style" style={{ minWidth: '225px', maxWidth: '225px' }}>
                            <Command>
                                <CommandInput placeholder="Search method..." className="command-input-style" />
                                <CommandEmpty className="command-empty-style">No method found.</CommandEmpty>
                                <CommandGroup>
                                    {shipmethod.map((customer) => (
                                        <CommandItem
                                            key={customer.value}
                                            value={customer.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                            className="command-item-style"
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === customer.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {customer.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
          </div>
           
          <div className="col-span-2 input-style-modal"> 
            <Label htmlFor="item-name">Item Name</Label>
            <Input id="item-name" type="text"/>
          </div>
          <div className="col-span-2"> 
            <Label htmlFor="description">Description</Label>
            <Textarea className="textarea-style" id="description"/>
          </div>
          <div className="col-span-1 input-style-modal">
            <Label htmlFor="qty">Qty</Label>
            <Input id="qty" type="text"/>
          </div>
          <div className="input-style-modal">
            <Label htmlFor="ship-by">Ship By</Label>
            <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[300px] justify-start text-left font-normal button-style-cal",
                                        !endDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {endDate ? format(endDate, "PPP") : <span>Pick due date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 cal-style">
                                <Calendar
                                    mode="single"
                                    selected={endDate}
                                    onSelect={handleEndDateSelect}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
          </div>
        </div>
        
        <DialogFooter className="custom-dialog-footer">
          <Button onClick={handleClose} className="custom-create-button">Create Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateItem;
