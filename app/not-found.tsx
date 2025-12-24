import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
            <Navbar />

            <div className="flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-2xl">
                    {/* 404 Animation Container */}
                    <div className="flex flex-col items-center gap-8">
                        {/* 404 Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-slate-400 rounded-full opacity-20 animate-pulse" 
                                style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>
                            </div>
                            <AlertTriangle className="w-24 h-24 text-slate-600" strokeWidth={1.5} />
                        </div>

                        {/* Main Content */}
                        <div className="text-center space-y-3">
                            <h1 className="text-6xl md:text-7xl font-bold text-slate-900">
                                404
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Page Not Found
                            </p>
                        </div>

                        {/* Description Card */}
                        <div className="w-full bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-slate-200">
                            <p className="text-slate-700 leading-relaxed">
                                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you typed the URL incorrectly.
                            </p>
                            <p className="text-slate-600 text-sm">
                                Don't worry! You can always return to our homepage and explore from there.
                            </p>
                        </div>

                        {/* Helpful Links */}
                        <div className="w-full grid md:grid-cols-2 gap-4">
                            {/* Popular Pages */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                                <h3 className="font-semibold text-slate-900 mb-3">Popular Pages</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="hover:text-slate-900 cursor-pointer">Browse Cars</li>
                                    <li className="hover:text-slate-900 cursor-pointer">Pricing</li>
                                    <li className="hover:text-slate-900 cursor-pointer">About Us</li>
                                </ul>
                            </div>

                            {/* Need Help */}
                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                                <h3 className="font-semibold text-slate-900 mb-3">Need Help?</h3>
                                <p className="text-sm text-slate-600 mb-2">Contact our support team:</p>
                                <p className="text-sm font-semibold text-slate-900">support@correo.com</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href={"/"} className="w-full">
                            <Button className="w-full h-12 bg-linear-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Home className="w-5 h-5 mr-2" />
                                Return to Homepage
                            </Button>
                        </Link>

                        {/* Error Code */}
                        <p className="text-center text-slate-400 text-sm">
                            Error Code: 404
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
