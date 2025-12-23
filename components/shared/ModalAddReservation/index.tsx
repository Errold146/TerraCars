import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { addDays } from "date-fns";
import { Car } from "@prisma/client";
import { Calendar } from "lucide-react";
import { DateRange } from "react-day-picker";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { CalendarSelector } from "./CalendarSelector";

interface Props {
    car: Car
}

export function ModalAddReservation({ car }: Props) {

    const [dateSelected, setDateSelected] = useState<{
        from: Date | undefined,
        to: Date | undefined
    }>({ from: new Date(), to: addDays(new Date(), 5) })

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        try {
            const res = await axios.post("/api/checkout", {
                carId: car.id,
                priceDay: car.priceDay,
                startDay: dateSelected.from,
                endDay: dateSelected.to,
                carName: car.name
            })

            window.location = res.data.url
            toast.success("Car reserved")

        } catch (error) {
            console.error(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className="mt-3 text-emerald-500 border-emerald-300 hover:bg-emerald-500 hover:text-emerald-50 transition-colors duration-300 cursor-pointer"
                >
                    <Calendar className="w-6 h-6 mr-2" />
                    Book Car
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Select the car rental dates!</AlertDialogTitle>
                </AlertDialogHeader>
                <CalendarSelector setDateSelected={setDateSelected} carPriceDay={car.priceDay} />
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => onReserveCar(car, dateSelected)}
                    >Book Car</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
