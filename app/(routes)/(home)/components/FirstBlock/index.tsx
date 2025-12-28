import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

export function FirstBlock() {
    return (
        <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
            <Reveal className="p-6 lg:pl-40" positions="bottom" delay={0.75}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold">
                    Premium {" "}
                    <span className="block font-black">Rental Cars</span> {" "}
                    in Costa Rica
                </h1>
                <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
                    Don't deny yourself of driving the best premium cars from around the word here and now
                </p>
            </Reveal>

            <Reveal className="flex justify-end" positions="right" delay={0.75}>
                <Image 
                    src={"/images/home/porsche.png"} 
                    alt="Image rental cars"
                    width={800}
                    height={800}
                    priority
                />
            </Reveal>
        </div>
    )
}
