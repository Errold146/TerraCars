"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function OrderErrorPage() {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-liner-to-br from-red-50 to-red-100">
            <Navbar />

            <div className="flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-2xl">
                    {/* Error Animation Container */}
                    <div className="flex flex-col items-center gap-8">
                        {/* Error Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-400 rounded-full opacity-20 animate-pulse" 
                                style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>
                            </div>
                            <AlertCircle className="w-24 h-24 text-red-500" strokeWidth={1.5} />
                        </div>

                        {/* Main Content */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                Payment Failed
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Something went wrong while processing your payment
                            </p>
                        </div>

                        {/* Error Card */}
                        <div className="w-full bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-red-200">
                            <p className="text-slate-700 leading-relaxed">
                                We were unable to complete your payment at this time. This could be due to insufficient funds, incorrect card details, or a temporary issue with your bank.
                            </p>
                            <p className="text-slate-600 text-sm">
                                Please verify your payment information and try again. If the problem persists, contact your bank or our support team.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full space-y-3">
                            {/* Retry Button */}
                            <Button 
                                onClick={handleRetry}
                                className="w-full h-12 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <AlertCircle className="w-5 h-5 mr-2" />
                                Try Again
                            </Button>

                            {/* Return Home Button */}
                            <Link href={"/"} className="w-full block">
                                <Button 
                                    variant="outline"
                                    className="w-full h-12 text-slate-700 border-slate-300 hover:bg-slate-50 text-lg font-semibold rounded-xl transition-all duration-300"
                                >
                                    <Home className="w-5 h-5 mr-2" />
                                    Return to Homepage
                                </Button>
                            </Link>
                        </div>

                        {/* Help Info */}
                        <div className="w-full bg-red-50 rounded-xl p-6 border border-red-200">
                            <p className="text-sm text-slate-700 text-center">
                                <span className="font-semibold text-red-600">Need help?</span> Contact our support team at <span className="font-semibold">support@correo.com</span> or call <span className="font-semibold">+1 (800) 123-4567</span>
                            </p>
                        </div>

                        {/* Secondary Info */}
                        <p className="text-center text-slate-500 text-sm">
                            Your reservation will be held for 15 minutes. Please try again soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
