"use client"

import { useAuth } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";

import { SidebarItem } from "./SidebarItem";
import { DataGeneralSidebar } from "./SidebarRoutes.data";

export function SidebarRoutes() {

    const { userId } = useAuth()

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p className="mb-2 text-slate-500 uppercase">General</p>

                    {
                        DataGeneralSidebar.map(item => (
                            <SidebarItem key={item.label} item={item} />
                        ))
                    }
                </div>

                <Separator />
            </div>
        </div>
    )
}
