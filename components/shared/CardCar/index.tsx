"use client"

import Image from "next/image";
import { Car } from "@prisma/client";
import { Heart } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useFavoritesCars } from "@/hooks/useFavoritesCars";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { CardCarSpecs } from "./CardCarSpecs";

interface CardCarProps {
    car: Car;
    showFavorite?: boolean;
}

export function CardCar({ car, showFavorite = true }: CardCarProps) {
    const { id, name, priceDay, photo } = car;
    const { favoriteItems, addFavoriteItem, removeFavoriteItem } = useFavoritesCars();
    const isFavorite = favoriteItems.some(item => item.id === id);

    return (
        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container with Overlay */}
            <div className="relative h-56 overflow-hidden">
                <Image 
                    src={photo}
                    alt={`${name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {formatPrice(priceDay)}
                        <span className="text-xs font-normal text-slate-600 dark:text-slate-400 ml-1">/day</span>
                    </p>
                </div>

                {/* Favorite Button */}
                {showFavorite && (
                    <button
                        onClick={isFavorite 
                            ? () => removeFavoriteItem(id)
                            : () => addFavoriteItem(car)
                        }
                        className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart 
                            className={cn(
                                "h-5 w-5 transition-colors duration-200",
                                isFavorite 
                                    ? "fill-red-500 text-red-500" 
                                    : "text-slate-600 dark:text-slate-400 hover:text-red-500"
                            )}
                        />
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Car Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 min-h-14">
                    {name}
                </h3>

                {/* Specifications */}
                <CardCarSpecs car={car} />

                {/* Action Button */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <ModalAddReservation car={car} />
                </div>
            </div>
        </div>
    );
}
