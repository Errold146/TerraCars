import { ListCar } from "./components/ListCar";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function CarsManagerPage() {

    const { userId } = await auth()
    if(!userId) return redirect("/");

    const cars = await db.car.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" }
    })

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Manage your cars</h2>
                <ButtonAddCar />
            </div>
            <ListCar cars={cars} />
        </div>
    )
}
