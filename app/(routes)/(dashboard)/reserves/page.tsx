import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { LucideMessageCircleWarning } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TableReserves } from "./components/TableReserves";

export default async function ReservesPage() {

    const { userId } = await auth()
    if ( !userId ) return redirect("/");

    const orders = await db.order.findMany({ where: { userId }, orderBy: { createdAt: "desc" }})

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Cars Reserves</h2>

            {
                orders.length === 0 ? (
                    <div className="flex flex-col justify-center items-center gap-4 h-[calc(100vh-200px)]">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <LucideMessageCircleWarning className="w-8 h-8 shrink-0" />
                            <p className="text-2xl font-semibold text-center md:text-left">
                                You have no reservations made.
                            </p>
                        </div>
                        <Link href="/dashboard">
                            <Button>Browse Cars</Button>
                        </Link>
                    </div>
                ) : (
                    <TableReserves orders={orders} />
                )
            }
        </div>
    )
}
