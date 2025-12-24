import Link from "next/link";
import { Home, CheckCircle, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";

export default function OrderConfirmationPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
            <Navbar />

            <div className="flex items-center justify-center px-4 py-20">
                <div className="w-full max-w-2xl">
                    {/* Success Animation Container */}
                    <div className="flex flex-col items-center gap-8">
                        {/* Success Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 animate-pulse" 
                                style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>
                            </div>
                            <CheckCircle className="w-24 h-24 text-emerald-500" strokeWidth={1.5} />
                        </div>

                        {/* Main Content */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                Reservation Confirmed!
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Your payment has been processed successfully
                            </p>
                        </div>

                        {/* Description Card */}
                        <div className="w-full bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-slate-200">
                            <p className="text-slate-700 leading-relaxed">
                                Your vehicle has been successfully reserved. You will receive a confirmation email within the next few minutes with all the details of your reservation.
                            </p>
                            <p className="text-slate-600 text-sm">
                                We are pleased to assist you. If you have any questions, please don't hesitate to contact us.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full grid md:grid-cols-2 gap-4">
                            {/* Email Card */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-600 font-medium">Email</p>
                                        <p className="text-slate-900 font-semibold">support@correo.com</p>
                                        <p className="text-slate-900 font-semibold">info@correo.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-600 font-medium">Phone</p>
                                        <p className="text-slate-900 font-semibold">+1 (800) 123-4567</p>
                                        <p className="text-slate-900 font-semibold">+1 (800) 987-6543</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href={"/"} className="w-full">
                            <Button className="w-full h-12 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Home className="w-5 h-5 mr-2" />
                                Return to Homepage
                            </Button>
                        </Link>

                        {/* Secondary Info */}
                        <p className="text-center text-slate-500 text-sm">
                            Save your confirmation email for future reference
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
