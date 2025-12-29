"use client"

import { Car } from "@prisma/client";
import { CardCar } from "@/components/shared/CardCar";

interface Props {
    cars: Car[]
}

export function ListCars({ cars }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                cars.map((car: Car) => (
                    <CardCar key={car.id} car={car} />
                ))
            }
        </div>
    )
}
