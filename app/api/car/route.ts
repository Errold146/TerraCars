import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { formSchema } from "@/app/(routes)/(dashboard)/dashboard/admin/cars-manager/components/FormAddCar/FormAddCar.form";

export async function POST(req: Request) {
    try {
        const { userId } = await auth()
        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        const body = await req.json()
        const parsed = formSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Validation error", issues: parsed.error.format() },
                { status: 400 }
            )
        }

        const data = parsed.data

        const car = await db.car.create({
            data: {
                userId,
                name: data.name,
                cv: data.cv,
                transmission: data.transmission,
                people: data.people,
                photo: data.photo,
                priceDay: data.priceDay,
                engine: data.engine,
                type: data.type,
                isPublish: data.isPublish ?? false,
            },
        })

        return NextResponse.json(car)
        
    } catch (error) {
        console.error("[CAR]: ", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}