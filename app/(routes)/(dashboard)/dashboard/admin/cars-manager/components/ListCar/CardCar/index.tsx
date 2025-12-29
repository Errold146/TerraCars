"use client"

import axios from "axios";
import Image from "next/image";
import { toast } from "sonner";
import { Car } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Trash2, Upload, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonEditCar } from "../ButtonEditCar";
import { CardCarSpecs } from "@/components/shared/CardCar/CardCarSpecs";
import { formatPrice } from "@/lib/utils";

interface Props {
    car: Car
}

export function CardCar({ car }: Props) {

    const router = useRouter()

    const deletedCar = async () => {
        try {
            await axios.delete(`/api/car/${car.id}`)
            toast.success("Car deleted successful")
            router.refresh()

        } catch (error) {
            toast.error("Something went wrong")
            console.error(error)
        }
    }

    const handlePublishCar = async (publish: boolean) => {
        try {
            await axios.patch(`/api/car/${car.id}`, { isPublish: publish })

            if(publish) {
                toast.success("Car Published successful")
            } else {
                toast.success("Car Unpublish successful")
            }

            router.refresh()

        } catch (error) {
            console.error(error)
            toast.error("Sorry. Something went wrong")
        }
    }

    return (
        <div className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container with Overlay */}
            <div className="relative h-56 overflow-hidden">
                <Image 
                    src={car.photo}
                    alt={`${car.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {formatPrice(car.priceDay)}
                        <span className="text-xs font-normal text-slate-600 dark:text-slate-400 ml-1">/day</span>
                    </p>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    {
                        car.isPublish ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white backdrop-blur-sm shadow-lg">
                                Published
                            </span>
                        ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white backdrop-blur-sm shadow-lg">
                                Not Published
                            </span>
                        )
                    }
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Car Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 min-h-[3.5rem]">
                    {car.name}
                </h3>

                {/* Specifications */}
                <CardCarSpecs car={car} />

                {/* Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                    {/* Delete and Edit Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant={"outline"}
                            onClick={deletedCar}
                            className="w-full group text-red-600 border-red-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>

                        <ButtonEditCar carData={car} />
                    </div>

                    {/* Publish/Unpublish Button */}
                    {
                        car.isPublish ? (
                            <Button
                                className="w-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all duration-300"
                                variant={"outline"}
                                onClick={() => handlePublishCar(false)}
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                Unpublish
                            </Button>
                        ) : (
                            <Button
                                className="w-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300"
                                onClick={() => handlePublishCar(true)}
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                Publish
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
