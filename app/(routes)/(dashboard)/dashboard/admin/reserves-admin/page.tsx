import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { TableReserves } from "./components/TableReserves";

export default async function ReservesAdminPage() {

    const user = await currentUser()
    const { userId } = await auth()
    if ( !userId || !user ) return redirect("/");

    const orders = await db.order.findMany({orderBy: { createdAt: "desc" }})

    return (
        <div>
            <h2 className="text-2xl font-bold">All Reserves</h2>

            <TableReserves orders={orders} />
        </div>
    )
}
