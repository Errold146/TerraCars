"use client"

import Link from "next/link";
import Image from "next/image";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {

    const { userId } = useAuth()

    return (
        <div className="max-w-5xl py-5 mx-auto">
            <div className="justify-between lg:flex">
                <Link
                    href={"/"}
                    className="flex items-center justify-center gap-x-2"
                >
                    <Image src={"/logo.svg"} alt="Logo of TerraCars" width={50} height={50} priority />
                    <span className="text-xl font-bold">TerraCars</span>
                </Link>

                <div className="flex items-center justify-center gap-x-7">
                    <Link href={"/cars"} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">List Cars</Link>
                    <Link href={"/dashboard"} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Dashboard</Link>

                    {userId ? (
                        <>
                            <Link href={"/favorites-cars"}>
                                <Heart className="cursor-pointer text-red-500" />
                            </Link>
                            <UserButton />
                        </>
                    ): (
                        <Link href={"/sign-in"} className="flex gap-x-3">
                            <Button>
                                SignIn
                                <User className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
