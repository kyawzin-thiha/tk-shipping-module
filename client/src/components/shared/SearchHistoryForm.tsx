import { useState } from 'react';
import { Input } from "@/components/ui/input"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const customers = [
    {
      value: "lamar",
      label: "Lamar",
    },
    {
      value: "pattison",
      label: "Pattison",
    },
    {
      value: "tkhouseaccount",
      label: "TK House Account",
    },
  ]

const SearchHistoryForm = () => {
    
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleStartDateSelect = (date: Date) => {
        setStartDate(date);
    };

    const handleEndDateSelect = (date: Date) => {
        setEndDate(date);
    };

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className="container">
            <div className="header-form-container">
                <h2 className="h2-semibold">Search History</h2>
                <p className="text-gray-500 mt-2">
                    Enter the fields you want to search for. Not all fields need to be filled in to search.
                </p>
            </div>
            <div className="form-container">

                <div className="form-input-row">
            
                <div className="form-input">
                    <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                    
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="button-style flex items-center justify-between"
                        >
                            <span className="text-left">
                                {value
                                    ? customers.find((customer) => customer.value === value)?.label
                                    : "Select customer..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="popover-content-style">
                            <Command>
                                <CommandInput placeholder="Search customer..." className="command-input-style" />
                                <CommandEmpty className="command-empty-style">No customer found.</CommandEmpty>
                                <CommandGroup>
                                    {customers.map((customer) => (
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
                               
                <div className="flex-container">
                    <div className="form-input">
                        <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Shipped from date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal button-style-cal",
                                        !startDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {startDate ? format(startDate, "PPP") : <span>Pick a start date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 cal-style">
                                <Calendar
                                    mode="single"
                                    selected={startDate}
                                    onSelect={handleStartDateSelect}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <span className="separator">-</span>
                    <div className="form-input">
                        <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Shipped to date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal button-style-cal",
                                        !endDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {endDate ? format(endDate, "PPP") : <span>Pick an end date</span>}
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
                </div>
                <div className="form-input-row">
                        <div className="form-input, input-style mr-10">
                            <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1 mt-5">Key Word Search</label>
                            <Input className="text-gray-500" type="text" placeholder="Search by item name, SO#, Tracking #..." />
                        </div>
                    </div>
                <div className="form-input-row centered">
                    <Button className="search-button">Search</Button>
                </div>
            </div>
        </div>
    );
};

export default SearchHistoryForm;
