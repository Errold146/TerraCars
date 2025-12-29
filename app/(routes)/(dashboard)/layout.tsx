import type { Metadata } from "next";

import { Sidebar } from "./dashboard/components/Sidebar";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard";

export const metadata: Metadata = {
	title: "TerraCars - Dashboard",
	description: "Admin your rent a car.",
};

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex w-full min-h-full">
            <div className="hidden min-h-full xl:block w-80 xl:fixed">
                <Sidebar />
            </div>
            <div className="w-full min-h-full xl:ml-80">
                <NavbarDashboard />
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
