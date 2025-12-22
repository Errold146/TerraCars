import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await new Promise<{ url: string; public_id: string }>((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "rent-cars" },
                (error, uploadResult) => {
                    if (error || !uploadResult) {
                        reject(error || new Error("Upload failed"));
                    } else {
                        resolve({ url: uploadResult.secure_url, public_id: uploadResult.public_id });
                    }
                }
            );

            stream.end(buffer);
        });

        return NextResponse.json({ url: result.url, publicId: result.public_id });

    } catch (error) {
        console.error("Cloudinary upload error", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { publicId } = await req.json();

        if (!publicId) {
            return NextResponse.json({ error: "No publicId provided" }, { status: 400 });
        }

        const result = await cloudinary.uploader.destroy(publicId);

        if (result.result === "ok") {
            return NextResponse.json({ message: "Image deleted successfully" });
        } else {
            return NextResponse.json({ error: "Failed to delete image" }, { status: 400 });
        }
    } catch (error) {
        console.error("Cloudinary delete error", error);
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}
