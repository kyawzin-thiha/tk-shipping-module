import { useState } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronsUpDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const address = [
    { value: "address1", label: "1234 Happy Way, Vancouver" },
    { value: "address2", label: "7852 Elizabeth Street, Langley" },
    { value: "address3", label: "0931 Hello World, Burnaby" },
];

const method = [
    { value: "courier", label: "Courier" },
    { value: "tkvan", label: "TK Van" },
    { value: "callforpickup", label: "Call For Pickup" },
];

const DeliveryFormInside = () => {
    const [openAddress, setOpenAddress] = useState(false);
    const [valueAddress, setValueAddress] = useState("");

    const [openMethod, setOpenMethod] = useState(false);
    const [valueMethod, setValueMethod] = useState("");

    // Sample data for information labels
    const shipDate = "2024-02-10";
    const shipBy = "2024-02-09";
    const trackingNumber = "12345-67890";

    return (
        <div className="container" style={{ marginBottom: 40 }}>
            <div className="form-container">
                <div className="form-input-row">
                    <div className="form-input" >
                        <label htmlFor="item-name" className="information-label">Shipped Date:</label>
                        <div className="information-value">{shipDate}</div>
                    </div>
                    <div className="form-input">
                        <label htmlFor="item-name" className="information-label">Tracking #:</label>
                        <div className="information-value">{trackingNumber}</div>
                    </div>
                    
                    <div className="form-input">
                        <label htmlFor="item-name" className="information-label">Ship By:</label>
                        <div className="information-value">{shipBy}</div>
                    </div>
                    <div className="form-input">
                        <label htmlFor="item-name" className="information-label">Ship Address:</label>
                        <Popover open={openAddress} onOpenChange={setOpenAddress}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={openAddress} className="button-style flex items-center justify-between">
                                    <span className="text-left">
                                        {valueAddress ? address.find((address) => address.value === valueAddress)?.label : "Select address..."}
                                    </span>
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="popover-content-style">
                                <Command>
                                    <CommandInput placeholder="Search address..." className="command-input-style" />
                                    <CommandEmpty className="command-empty-style">No customer found.</CommandEmpty>
                                    <CommandGroup>
                                        {address.map((address) => (
                                            <CommandItem
                                                key={address.value}
                                                value={address.value}
                                                onSelect={(currentValue) => {
                                                    setValueAddress(currentValue === valueAddress ? "" : currentValue)
                                                    setOpenAddress(false)
                                                }}
                                                className="command-item-style"
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        valueAddress === address.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {address.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    
                    <div className="ml-10 mr-10 mb-5">
                        <label htmlFor="item-name" className="information-label" >Ship Method:</label>
                        <Popover open={openMethod} onOpenChange={setOpenMethod}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={openMethod} className="small-button-style flex items-center justify-between">
                                    <span className="text-left">
                                        {valueMethod ? method.find((method) => method.value === valueMethod)?.label : "Select method..."}
                                    </span>
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="popover-content-style">
                                <Command>
                                    <CommandInput placeholder="Search method..." className="command-input-style" />
                                    <CommandEmpty className="command-empty-style">No method found.</CommandEmpty>
                                    <CommandGroup>
                                        {method.map((method) => (
                                            <CommandItem
                                                key={method.value}
                                                value={method.value}
                                                onSelect={(currentValue) => {
                                                    setValueMethod(currentValue === valueMethod ? "" : currentValue)
                                                    setOpenMethod(false)
                                                }}
                                                className="command-item-style"
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        valueMethod === method.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {method.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
export default DeliveryFormInside