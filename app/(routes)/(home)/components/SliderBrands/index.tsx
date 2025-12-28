"use client"

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { databrands } from "./SlidaerBrands.data";
import { Reveal } from "@/components/shared/Reveal";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export function SliderBrands() {
    
    return (
        <Reveal positions="bottom" className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10">
            <Carousel
                className="w-full max-w-6xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {databrands.map(({url}) => (
                        <CarouselItem 
                            key={url}
                            className="basis-4/4 md:basis-2/4 lg:basis-1/6"
                        >
                            <Image 
                                src={url}
                                alt="Icono car"
                                width={90}
                                height={90}
                                className="object-contain aspect-3/2"
                                priority

                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Reveal>
    )
}
