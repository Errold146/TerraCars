"use client"

import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar as Cal } from "lucide-react";

import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    setDateSelected: React.Dispatch<React.SetStateAction<{from: Date | undefined; to: Date | undefined}>>
    carPriceDay: string
}

export function CalendarSelector({ setDateSelected, className, carPriceDay }: Props) {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5)
    })

    useEffect(() => {
        setDateSelected({
            from: date?.from,
            to: date?.to
        })
    }, [date])
    
    const calculateDaysBetween = (from: Date, to: Date): number => {
        const oneDay = 24 * 60 * 60 * 1000
        const diffTime = to.getTime() - from.getTime()

        return Math.round(diffTime / oneDay)
    }

    const handleDateSelect = (newDate: DateRange | undefined) => {
        if (newDate?.from && newDate?.to) {
            // Validar que 'from' sea menor que 'to'
            if (newDate.from > newDate.to) {
                // Intercambiar las fechas si están al revés
                setDate({ from: newDate.to, to: newDate.from })
                return
            }
        }
        setDate(newDate)
    }

    const daysBetween = date?.from && date.to ? calculateDaysBetween(date.from, date.to) : 0

    return (
        <>
            <div 
                className={cn(
                    "grid gap-2", className
                )}
            >
                {
                    date?.from && date.to && (
                        <>
                            <div className="mt-4 text-lg text-black">Total days: {daysBetween}</div>
                            <div>Total Amount: { formatPrice(daysBetween * Number(carPriceDay)) } with IVA</div>
                        </>
                    )
                }

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                            <Cal className="w-4 h-4 mr-2" />
                            {
                                date?.from ? (
                                    date?.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} - {" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )
                            }
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar 
                            mode="range" 
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                    </PopoverContent>
                </Popover>
            </div>   
        </>
    )
}
