"use client"

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { FormAddCar } from "../FormAddCar";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

export function ButtonAddCar() {

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Dialog
            open={openDialog}
            onOpenChange={setOpenDialog}
        >
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    onClick={() => setOpenDialog(true)}
                    className="cursor-pointer"
                >
                    Add New Car
                    <PlusCircle className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Car</DialogTitle>
                    <DialogDescription>
                        Fill in the form below to add a new car to your inventory.
                    </DialogDescription>
                </DialogHeader>
                <FormAddCar setOpenDialog={setOpenDialog}  />
            </DialogContent>
        </Dialog>
    )
}
