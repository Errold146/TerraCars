"use client"

import axios from "axios";
import Image from "next/image";
import { toast } from "sonner";
import { Car } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Fuel, Gauge, Gem, Trash2, Upload, Users, Wrench, CreditCard } from "lucide-react";

import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonEditCar } from "../ButtonEditCar";

interface Props {
    car: Car
}

export function CardCar({ car }: Props) {

    const router = useRouter()

    const deletedCar = async () => {
        try {
            await axios.delete(`/api/car/${car.id}`)
            toast.success("Car deleted successfully")
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
                toast.success("Car Published Successfully")
            } else {
                toast.success("Car Unpublish Successfully")
            }

            router.refresh()

        } catch (error) {
            console.error(error)
            toast.error("Sorry. Something went wrong")
        }
    }

    return (
        <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-xl">
            <Image 
                src={car.photo}
                alt={`Image of ${car.name}`}
                width={400}
                height={600}
                priority
                className="rounded-lg"
            />

            {
                car.isPublish ? (
                    <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-emerald-600 rounded-t-lg">Published</p>
                ) : (
                    <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-600 rounded-t-lg">Not Published</p>
                )
            }

            <div className="relative p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                    <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
                </div>
                
                <div className="grid md:grid-cols-2  gap-x-4">
                    <p className="capitalize flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        {formatPrice(car.priceDay)} x Día
                    </p>

                    <p className="capitalize flex items-center">
                        <Gem className="h-4 w-4 mr-2" />
                        {car.type}
                    </p>
                    
                    <p className="capitalize flex items-center">
                        <Wrench className="h-4 w-4 mr-2" />
                        {car.transmission}
                    </p>
                    
                    <p className="capitalize flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {car.people} People
                    </p>
                    
                    <p className="capitalize flex items-center">
                        <Fuel className="h-4 w-4 mr-2" />
                        {car.engine}
                    </p>
                    
                    <p className="capitalize flex items-center">
                        <Gauge className="h-4 w-4 mr-2" />
                        {car.cv} Horsepower
                    </p>
                </div>

                <div className="flex justify-between my-3 gap-x-4">
                    <Button
                        variant={"outline"}
                        onClick={deletedCar}
                        className="group text-red-500 bg-red-50 hover:bg-red-500 hover:text-red-50 transition-colors duration-300 border-red-500"
                    >
                        Delete
                        <Trash2 className="h-4 w-4 ml-2 text-red-500 group-hover:text-red-50 transition-colors duration-300" />
                    </Button>

                    <ButtonEditCar carData={car} />
                </div>

                {
                    car.isPublish ? (
                        <Button
                            className="w-full"
                            variant={"outline"}
                            onClick={() => handlePublishCar(false)}
                        >
                            Unpublish
                            <Upload className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            className="w-full"
                            onClick={() => handlePublishCar(true)}
                        >
                            Publish
                            <Upload className="w-4 h-4 ml-2" />
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
