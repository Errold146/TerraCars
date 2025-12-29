"use client"

import { useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel} from "@/components/ui/select";

interface Props {
    setFilters: (filterName: string, filterValue: string) => void
    clearFilters: () => void
}

export function FilterCars({setFilters, clearFilters}: Props) {

    const [typeFilter, setTypeFilter] = useState<string>("")
    const [transmissionFilter, setTransmissionFilter] = useState<string>("")
    const [engineFilter, setEngineFilter] = useState<string>("")
    const [peopleFilter, setPeopleFilter] = useState<string>("")

    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value)
        
        // Update local state
        if (filter === "type") setTypeFilter(value)
        if (filter === "transmission") setTransmissionFilter(value)
        if (filter === "engine") setEngineFilter(value)
        if (filter === "people") setPeopleFilter(value)
    }

    const handleClearFilters = () => {
        clearFilters()
        // Reset all local states
        setTypeFilter("")
        setTransmissionFilter("")
        setEngineFilter("")
        setPeopleFilter("")
    }
    
    return (
        <div className="mt-5 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Select
                value={typeFilter}
                onValueChange={value => handleFilter("type", value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Car type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Car Type</SelectLabel>
                        <SelectItem value="2">Sedán</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="familiar">Familiar</SelectItem>
                        <SelectItem value="delux">Delux</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            
            <Select
                value={transmissionFilter}
                onValueChange={value => handleFilter("transmission", value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gear Shift" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Gear Shift</SelectLabel>
                        <SelectItem value="automatic">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>

                    </SelectGroup>
                </SelectContent>
            </Select>
            
            <Select
                value={engineFilter}
                onValueChange={value => handleFilter("engine", value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Engine type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Engine type</SelectLabel>
                        <SelectItem value="gasoil">Gasoil</SelectItem>
                        <SelectItem value="disel">Diesel</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            
            <Select
                value={peopleFilter}
                onValueChange={value => handleFilter("people", value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Number of passengers" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Number of passengers</SelectLabel>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button
                variant={"outline"}
                className="w-full text-red-500 hover:bg-red-500 hover:text-red-50 transition-colors duration-300 border-red-500"
                onClick={handleClearFilters}
            >
                Remove Filters
                <Trash2 className="w-4 h-4 ml-2" />
            </Button>
        </div>
    )
}
