"use client"

import { useState } from "react";
import { Car } from "@prisma/client";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormEditCar } from "../FormEditCar";

interface Props {
    carData: Car
}

export function ButtonEditCar({ carData }: Props) {

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className="w-full text-blue-600 border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Car</DialogTitle>
                    <DialogDescription>
                        Edit the car information below
                    </DialogDescription>
                </DialogHeader>
                <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
            </DialogContent>
        </Dialog>
    )
}
