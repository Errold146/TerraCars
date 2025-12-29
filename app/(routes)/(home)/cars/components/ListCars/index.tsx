"use client"

import { Car } from "@prisma/client";
import { CardCar } from "@/components/shared/CardCar";
import { SkeletonCars } from "@/components/shared/SkeletonCars";

interface Props {
    cars: Car[] | undefined
}

export function ListCars({ cars }: Props) {

    if (!cars) {
        return (
            <SkeletonCars />
        )
    }

    return (
        <>
            {
                cars.length === 0 && (
                    <p className="text-2xl text-center my-32 font-semibold">No cars were found with the provided filters.</p>
                )
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    cars.map((car: Car) => (
                        <CardCar key={car.id} car={car} />
                    ))
                }
            </div>
        </>
    )
}
