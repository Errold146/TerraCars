import Stripe from "stripe";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",

}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const { carId, priceDay, startDay, endDay, carName } = await req.json();

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });
        if (!carId || !priceDay || !startDay || !endDay || !carName) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const start = new Date(startDay);
        const end = new Date(endDay);

        if (start >= end) {
            return new NextResponse("Invalid date range", { status: 400 });
        }

        const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const totalAmount = Number(priceDay) * totalDays;
        const totalAmountStripe = Math.round(Number(priceDay) * 100 * totalDays);

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                quantity: 1,
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: carName
                    },
                    unit_amount: totalAmountStripe
                }
            }
        ]

        const order = await db.order.create({
            data: {
                carId,
                carName,
                userId,
                status: "confirmed",
                totalAmount: totalAmount.toString(),
                orderDate: start,
                orderEndDate: end,
            }
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            billing_address_collection: "required",
            phone_number_collection: {
                enabled: true
            },
            success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
            cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
            metadata: {
                orderId: order.id,
                carId,
                startDay: start.toISOString(),
                endDay: end.toISOString(),
                totalDays: totalDays.toString()
            }
        });

        return NextResponse.json({ url: session.url }, { headers: corsHeaders });
        
    } catch (error) {
        console.error("[CHECKOUT_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}