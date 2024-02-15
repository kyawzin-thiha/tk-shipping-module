import { useState } from 'react';
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const SearchHistoryForm = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleStartDateSelect = (date: Date) => {
        setStartDate(date);
    };

    const handleEndDateSelect = (date: Date) => {
        setEndDate(date);
    };

    return (
        <div className="container">
            <div className="header-form-container">
                <h2 className="h2-semibold">Search History</h2>
                <p className="text-gray-500">
                    Enter the fields you want to search for. Not all fields need to be filled in to search.
                </p>
            </div>
            <div className="form-container">
                <div className="form-input-row">
                    <div className="form-input">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Customer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Customer</SelectLabel>
                                    <SelectItem value="Lamar">Lamar</SelectItem>
                                    <SelectItem value="Pattison">Pattison</SelectItem>
                                    <SelectItem value="TK House Account">TK House Account</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="form-input">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !startDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {startDate ? format(startDate, "PPP") : <span>Pick a start date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={startDate}
                                    onSelect={handleStartDateSelect}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="form-input">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !endDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {endDate ? format(endDate, "PPP") : <span>Pick an end date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={endDate}
                                    onSelect={handleEndDateSelect}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="form-input">
                        <Input type="text" placeholder="Enter Sale Order #" />
                    </div>
                </div>
                <div className="form-input-row">
                    <div className="form-input">
                        <Input type="text" placeholder="Enter Item Name" />
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
