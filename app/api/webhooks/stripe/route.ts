import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = (await headers()).get("stripe-signature");

        if (!signature) {
            return new NextResponse("Missing signature", { status: 400 });
        }

        let event: any;

        try {
            event = stripe.webhooks.constructEvent(
                body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET!
            );
        } catch (err) {
            console.error("[WEBHOOK_ERROR]", err);
            return new NextResponse("Webhook signature verification failed", { status: 400 });
        }

        // Handle different event types
        switch (event.type) {
            case "payment_intent.succeeded":
                await handlePaymentIntentSucceeded(event.data.object);
                break;
            case "payment_intent.payment_failed":
                await handlePaymentIntentFailed(event.data.object);
                break;
            case "checkout.session.completed":
                await handleCheckoutSessionCompleted(event.data.object);
                break;
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return new NextResponse("Webhook processed successfully", { status: 200 });
    } catch (error) {
        console.error("[WEBHOOK_PROCESS_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

async function handlePaymentIntentSucceeded(paymentIntent: any) {
    console.log("✅ Payment succeeded:", paymentIntent.id);

    try {
        // The actual order update happens on checkout.session.completed
        // This is just a safety check/log
    } catch (error) {
        console.error("[PAYMENT_INTENT_SUCCEEDED_ERROR]", error);
    }
}

async function handlePaymentIntentFailed(paymentIntent: any) {
    console.log("❌ Payment failed:", paymentIntent.id);

    try {
        // You could implement logic to handle failed payments here
        // For example, send an email notification or update order status
    } catch (error) {
        console.error("[PAYMENT_INTENT_FAILED_ERROR]", error);
    }
}

async function handleCheckoutSessionCompleted(session: any) {
    console.log("✅ Checkout session completed:", session.id);

    try {
        const orderId = session.metadata?.orderId;

        if (!orderId) {
            console.warn("No orderId in metadata");
            return;
        }

        // Update order status to completed
        const updatedOrder = await db.order.update({
            where: {
                id: orderId
            },
            data: {
                status: "completed",
                stripeSessionId: session.id,
                stripePaidAt: new Date()
            }
        });

        console.log("📦 Order updated:", updatedOrder.id);

        // Here you could:
        // - Send confirmation email
        // - Update car availability
        // - Send notification to user
        // - Log transaction
    } catch (error) {
        console.error("[CHECKOUT_SESSION_COMPLETED_ERROR]", error);
        throw error;
    }
}
