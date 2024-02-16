import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import CloseIcon from '@mui/icons-material/Close';
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
import { DataGrid, GridColDef } from '@mui/x-data-grid';


  const packagetype = [
    {
      value: "box",
      label: "Box",
    },
    {
      value: "roll",
      label: "Roll",
    },
    {
      value: "custom",
      label: "Custom",
    },
    {
        value: "envelope",
        label: "Envelope",
    },
  ]

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Item', width: 250 },
    { field: 'descrption', headerName: 'Description', width: 350 },
    { field: 'so', headerName: 'SO #', width: 110 },
    { field: 'shipaddress', headerName: 'Ship Address', width: 230 },
    { field: 'remain', headerName: 'Remain', width: 100 },
    { field: 'qty', headerName: 'Qty', width: 100 },
  ];
  
/* Remove when real data populated */
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

function CreateItem({ onClose }) {
    const handleClose = () => {
        onClose();
    };
    

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

  return (
    <Dialog open={true} onClose={handleClose} className="custom-dialog">
    <DialogContent className="custom-dialog-content sm:min-w-[1255px]">
        <DialogHeader className="custom-dialog-header">
        <DialogTitle className="custom-dialog-title">
            Add Items to Box
        </DialogTitle>
        <Button className="close-button" onClick={handleClose}>
            <CloseIcon />
        </Button>
        <DialogDescription className="custom-dialog-description">
            Only items with the same Ship Method and Ship Address can be added to the same box.
        </DialogDescription>
        </DialogHeader>
        <br/>
        {/* Your dialog content goes here */}
        <div className="grid grid-cols-2 gap-4">
        <div className="input-style-modal">
            <Label htmlFor="shipping-method">Package Type</Label>
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
                    ? packagetype.find((customer) => customer.value === value)?.label
                    : "Select..."}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="popover-content-style" style={{ minWidth: '225px', maxWidth: '225px' }}>
                <Command>
                <CommandInput placeholder="Search type..." className="command-input-style" />
                <CommandEmpty className="command-empty-style">No method found.</CommandEmpty>
                <CommandGroup>
                    {packagetype.map((customer) => (
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
        </div>
        <div style={{ width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 7 },
            },
            }}
            pageSizeOptions={[7]}
            checkboxSelection
        />
        </div>
        
        <DialogFooter className="custom-dialog-footer">
          <Button onClick={handleClose} className="custom-create-button">Save Box</Button>
        </DialogFooter>

    </DialogContent>
    </Dialog>

  );
}

export default CreateItem;
