"use client"

import { Car } from "@prisma/client";
import { useFavoritesCars } from "@/hooks/useFavoritesCars"
import { CardCar } from "@/components/shared/CardCar";

export function ListFavoritesCars() {

    const { favoriteItems } = useFavoritesCars()

    return (
        <>
            {
                favoriteItems.length === 0 ? (
                    <h2 className="text-2xl font-semibold flex items-center justify-center">
                        You have no cars added to favorites
                    </h2>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            favoriteItems.map((car: Car) => (
                                <CardCar key={car.id} car={car} />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}
