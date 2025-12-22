import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import axios from "axios"

// Helper function to extract publicId from Cloudinary URL
const getPublicIdFromUrl = (url: string): string | null => {
    try {
        // URL format: https://res.cloudinary.com/{cloud_name}/image/upload/v{version}/{folder}/{publicId}.{extension}
        const parts = url.split("/");
        const filename = parts[parts.length - 1]; // Get the last part (publicId.ext)
        const folder = parts[parts.length - 2]; // Get the folder name
        const publicId = `${folder}/${filename.split(".")[0]}`; // Combine folder/publicId without extension
        return publicId;
    } catch (error) {
        console.error("Error extracting publicId:", error);
        return null;
    }
};

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ carId: string }> }
) {
    try {
        const { carId } = await params
        const { userId } = await auth()
        const values = await req.json()
    
        if(!userId) return new NextResponse("Unauthorized", { status: 401 });

        const car = await db.car.update({ where: { id: carId, userId }, data: { ...values } })

        return NextResponse.json(car)

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Error Server", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ carId: string }> }
) {
    try {
        const { carId } = await params
        const { userId } = await auth()
    
        if(!userId) return new NextResponse("Unauthorized", { status: 401 });

        // Get car data to retrieve the photo URL
        const car = await db.car.findUnique({
            where: { id: carId }
        })

        if (!car) {
            return new NextResponse("Car not found", { status: 404 })
        }

        // Delete the image from Cloudinary if it exists
        if (car.photo) {
            const publicId = getPublicIdFromUrl(car.photo)
            if (publicId) {
                try {
                    await axios.delete("/api/upload", {
                        data: { publicId }
                    })
                } catch (error) {
                    console.error("Error deleting image from Cloudinary:", error)
                    // Continue with car deletion even if image deletion fails
                }
            }
        }

        // Delete the car from database
        const deletedCar = await db.car.delete({ where: { id: carId }})
        return NextResponse.json(deletedCar)

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Error Server", { status: 500 });
    }
}