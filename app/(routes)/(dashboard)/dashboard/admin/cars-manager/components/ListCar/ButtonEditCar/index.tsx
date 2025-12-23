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
        <Dialog open={openDialog} >
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    onClick={() => setOpenDialog(true)}
                    className="cursor-pointer text-emerald-300 border-emerald-300 bg-emerald-50 hover:bg-emerald-500 hover:text-emerald-50 transition-colors duration-300"
                >
                    Edit
                    <Pencil className="w-4 h-4 ml-3" />
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
