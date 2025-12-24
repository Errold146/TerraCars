import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function ReservesPage() {

    const { userId } = await auth()
    if ( !userId ) return redirect("/");

    const order = await db.order.findMany({ where: { userId }, orderBy: { createdAt: "desc" }})

    return (
        <div>
            <h2 className=" text-2xl font-bold mb-4">Cars Reserves</h2>
        </div>
    )
}
