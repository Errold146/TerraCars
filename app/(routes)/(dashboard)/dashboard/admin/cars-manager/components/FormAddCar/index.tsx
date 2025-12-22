"use client"

import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import { formSchema } from "./FormAddCar.form";

interface Props {
    setOpenDialog:  Dispatch<SetStateAction<boolean>> 
}

export function FormAddCar({ setOpenDialog }: Props) {

    const [photoUploaded, setPhotoUploaded] = useState(false)
    const [uploading, setUploading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            cv: "",
            transmission: "",
            people: "",
            photo: "",
            priceDay: "",
            engine: "",
            type: "",
            isPublish: false
        },
    })
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setOpenDialog(false)

        try {
            await axios.post("/api/car", values)
            toast.success("Car created successfully")
            router.refresh()
            
        } catch (error) {
            toast.error("Something went wrong")
            console.error(error)
        }
    }

    const handlePhotoUpload = async (file: File, onChange: (value: string) => void) => {
        try {
            setUploading(true)
            const formData = new FormData()
            formData.append("file", file)

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                throw new Error("Upload failed")
            }

            const data = await response.json()
            const url = data.url as string

            form.setValue("photo", url, { shouldValidate: true, shouldDirty: true, shouldTouch: true })
            onChange(url)
            await form.trigger("photo")
            setPhotoUploaded(true)
            toast.success("Image uploaded successfully!", { id: "upload" })
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Upload error"
            toast.error(message, { id: "upload" })
        } finally {
            setUploading(false)
        }
    }

    const { isValid } = form.formState

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name Car" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cv"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Power</FormLabel>
                                <FormControl>
                                    <Input placeholder="200 horsepower" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="transmission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transmission</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select transmission type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="manual">Manual</SelectItem>
                                        <SelectItem value="automatic">Automatic</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="people"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>People</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select capacity" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                        <SelectItem value="7">7</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="engine"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Engine</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select engine type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="gasoline">Gasoline</SelectItem>
                                        <SelectItem value="diesel">Diesel</SelectItem>
                                        <SelectItem value="electric">Electric</SelectItem>
                                        <SelectItem value="hybrid">Hybrid</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select car type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="sedan">Sedan</SelectItem>
                                        <SelectItem value="suv">SUV</SelectItem>
                                        <SelectItem value="coupe">Coupe</SelectItem>
                                        <SelectItem value="familiar">Familiar</SelectItem>
                                        <SelectItem value="deluxe">Deluxe</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="priceDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price per Day</FormLabel>
                                <FormControl>
                                    <Input placeholder="The price of the day" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="photo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Car Image</FormLabel>
                                <FormControl>
                                    <div className="space-y-2">
                                        {/* Hidden input keeps RHF state in sync */}
                                        <input type="hidden" {...field} />
                                        <label
                                            htmlFor="car-image"
                                            className="flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                                        >
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-800">Upload car image</span>
                                                <span className="text-xs text-slate-500">PNG o JPG, hasta 4MB</span>
                                            </div>
                                            <span className="rounded-md bg-slate-800 px-3 py-2 text-xs font-semibold text-white">
                                                {uploading ? "Subiendo..." : "Seleccionar"}
                                            </span>
                                        </label>
                                        <input
                                            id="car-image"
                                            type="file"
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0]
                                                if (!file) return
                                                toast.loading("Uploading image...", { id: "upload" })
                                                await handlePhotoUpload(file, field.onChange)
                                            }}
                                            disabled={uploading}
                                            className="sr-only"
                                        />
                                        <div className="text-xs text-slate-600">
                                            {uploading && "Subiendo imagen..."}
                                            {!uploading && photoUploaded && <span className="text-green-600">Image uploaded!</span>}
                                            {!uploading && !photoUploaded && "Selecciona una imagen para subir."}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="lg:flex lg:justify-end">
                    <Button 
                        type="submit"
                        className="w-full lg:w-1/2"
                        disabled={!isValid}
                    >Create New Car</Button>
                </div>
            </form>
        </Form>
    )
}
