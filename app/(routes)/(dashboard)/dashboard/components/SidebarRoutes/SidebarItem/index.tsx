import Link from "next/link"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"

interface Props {
    item: {
        icon: LucideIcon,
        label: string,
        href: string
    },
}

export function SidebarItem({item}: Props) {

    const { icon: Icon, label, href } = item

    const pathName = usePathname()
    const activePath = pathName === href

    return (
        <Link
            href={href}
            className={cn(
                "flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-400/20 p-2 rounded-lg cursor-pointer",
                activePath && "bg-slate-400/20"
            )}
        >
            <Icon className="h-5 w-5" />
            {label}
        </Link>
    )
}
