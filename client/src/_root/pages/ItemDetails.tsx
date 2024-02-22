import { Button } from "@/components/ui/button";
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
import LeftMenu from "@/components/shared/LeftMenu";


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
   
   const ItemDetails = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleEndDateSelect = (date: Date) => {
        setEndDate(date);
    };

     return (

      <div className="flex container">
        <LeftMenu/>

        <div className="header-container">
          <h2 className="h2-semibold">Items Details</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="grey-button" style={{ marginRight: "auto" }}>
              <img src="/assets/icons/arrow-left-solid.svg" alt="arrow" className="plus-icon" />
              See all Items
            </Button>
        </div>

        <div style={{ width: 500, marginLeft:400 }}>
        <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 input-style-modal">
          <Label htmlFor="customer">Customer</Label>
          <Input id="customer" type="text" placeholder=""/>
        </div>
        <div className="input-style-modal col-span-2">
          <Label htmlFor="billing-address">Billing Address</Label>
          <Input id="billing-address" type="text" placeholder="Enter address in format below"/>
        </div>
        <div className="input-style-modal col-span-2">
          <Label htmlFor="shipping-address">Shipping Address</Label>
          <Input id="shipping-address" type="text" placeholder="Enter address in format below"/>
        </div>
        <div className="col-span-2 small-regular text-gray-500" style={{ marginTop: '-0.9rem' }}> 
          Unit-Street, City, Province, Postal Code, Country
        </div>
        <div className="input-style-modal mt-2">
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
      <div style={{marginLeft: 'auto', marginTop: '25px'}}>
      <Button className="custom-create-button">Save Item</Button>
      </div>
    </div>
    
    </div>
     )
   }
   
   export default ItemDetails
   