import { Calendar, Car, Heart, SquareGanttChart } from "lucide-react";

export const DataGeneralSidebar = [
    {
        icon: Car,
        label: "Cars",
        href: "/dashboard"
    },
    {
        icon: Calendar,
        label: "Cars Reserves",
        href: "/reserves"
    },
    {
        icon: Heart,
        label: "Cars Favorites",
        href: "/favorites-cars"
    },
]

export const dataAdminSidebar = [
    {
        icon: SquareGanttChart,
        label: "Manage your cars",
        href: "/dashboard/admin/cars-manager",
    },
    {
        icon: Calendar,
        label: "All reserves",
        href: "/dashboard/admin/reserves-admin",
    },
];