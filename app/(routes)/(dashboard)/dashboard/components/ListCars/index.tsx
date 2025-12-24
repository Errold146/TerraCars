"use client"

import Image from "next/image";
import { Car } from "@prisma/client";
import { cn, formatPrice } from "@/lib/utils";
import { useFavoritesCars } from '@/hooks/useFavoritesCars';
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { CreditCard, Gem, Wrench, Users, Fuel, Gauge, Heart, Car as Carro } from "lucide-react";

interface Props {
    cars: Car[]
}

export function ListCars({ cars }: Props) {

    const { favoriteItems, addFavoriteItem, removeFavoriteItem } = useFavoritesCars()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                cars.map((car: Car) => {
                    const {id, name, priceDay, photo, people, transmission, type, cv, engine } = car

                    const likedItem = favoriteItems.some(item => item.id === car.id)

                    return (
                        <div 
                            key={id}
                            className="p-1 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image 
                                src={photo}
                                alt={`Image of ${name}`}
                                width={400}
                                height={600}
                                priority
                                className="rounded-lg"
                            />

                            <div className="p-3">
                                <div className="flex flex-col mb-3 gap-x-4">
                                    <p className=" flex gap-2 text-xl min-h-16 lg:min-h-fit font-semibold">
                                        <Carro className="h-7 w-7" />
                                        {name}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2  gap-x-4">
                                    <p className="capitalize flex items-center">
                                        <CreditCard className="h-4 w-4 mr-2" />
                                        {formatPrice(priceDay)} x Día
                                    </p>

                                    <p className="capitalize flex items-center">
                                        <Gem className="h-4 w-4 mr-2" />
                                        {type}
                                    </p>
                                    
                                    <p className="capitalize flex items-center">
                                        <Wrench className="h-4 w-4 mr-2" />
                                        {transmission}
                                    </p>
                                    
                                    <p className="capitalize flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        {people} People
                                    </p>
                                    
                                    <p className="capitalize flex items-center">
                                        <Fuel className="h-4 w-4 mr-2" />
                                        {engine}
                                    </p>
                                    
                                    <p className="capitalize flex items-center">
                                        <Gauge className="h-4 w-4 mr-2" />
                                        {cv} Horsepower
                                    </p>

                                </div>
                                
                                <div className="flex items-center justify-between mx-0.5 gap-x-3">
                                    <ModalAddReservation car={car} />
                                    <Heart 
                                        className={cn(
                                            "h-6 w-6 mr-3 mt-2 cursor-pointer" ,
                                            likedItem && "fill-red-500 text-red-800"
                                        )}
                                        onClick={likedItem 
                                            ? () => removeFavoriteItem(car.id)
                                            : () => addFavoriteItem(car)
                                        } 
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
