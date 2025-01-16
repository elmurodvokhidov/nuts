"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export default function InfiniteCarousel() {
    return (
        <div className="flex justify-center">
            <Carousel
                opts={{ loop: true, breakpoints: {} }}
                plugins={[Autoplay({ delay: 2000 })]}
                className="w-full max-w-7xl select-none"
            >
                <CarouselContent>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand1.png"
                                    alt="brand 1"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand2.png"
                                    alt="brand 2"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand3.png"
                                    alt="brand 3"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand4.png"
                                    alt="brand 4"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem >
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand1.png"
                                    alt="brand 5"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand3.png"
                                    alt="brand 6"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-[250px]">
                        <Card className="w-[250px] h-[150px] rounded-none">
                            <CardContent className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src="/images/brand2.png"
                                    alt="brand 7"
                                    width={150}
                                    height={100}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent >
            </Carousel >
        </div >
    )
}