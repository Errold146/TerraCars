import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { ListCars } from "./components/ListCars";

export default async function DashboardPage() {

    const { userId } = await auth()
    if ( !userId ) return redirect("/");

    const cars = await db.car.findMany({ where: { isPublish: true }, orderBy: { createdAt: "desc" } })

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">List of Cars</h2>
            </div>
            <ListCars cars={cars} />
        </div>
    )
}
