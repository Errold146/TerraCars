import Image from "next/image";
import Link from "next/link";

export function LogoDashboard() {
    return (
        <Link 
            href={"/"}
            className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6"
        >
            <Image 
                src={"/logo.svg"}
                alt="Logo TerraCars"
                width={30}
                height={30}
                priority
                className="w-auto h-auto"
            />
            <h2 className="text-xl font-bold">TerraCars</h2>
        </Link>
    )
}
