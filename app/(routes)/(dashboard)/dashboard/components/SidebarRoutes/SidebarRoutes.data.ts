import { Calendar, Car, Heart, SquareGanttChart, Home } from "lucide-react";

export const DataGeneralSidebar = [
    {
        icon: Home,
        label: "Home",
        href: "/"
    },
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

export const DataAdminSidebar = [
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