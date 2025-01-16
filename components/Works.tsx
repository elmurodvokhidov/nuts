'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GLOBAL_SERVER_URL } from '@/constants';
import { Skeleton } from './ui/skeleton';

export default function Works() {
    const [products, setProducts] = useState<Product[]>([]);
    const t = useTranslations('works');

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${GLOBAL_SERVER_URL}/products`);
            const data = await response.json();
            setProducts(data);
        };

        fetchPosts();
    }, [])

    return (
        <div className='px-8 space-y-16'>
            <div className='flex flex-col items-center gap-5'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1'>{t('text2')}</h1>
            </div>

            <Carousel
                opts={{ align: "start" }}
                className="w-full max-w-6xl laptop:max-w-[80%] m-auto select-none"
            >
                <CarouselContent className='-ml-10'>
                    {
                        products.length > 0 ? (
                            products.map((product: Product, index: number) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 laptop:basis-1/4 pl-10">
                                    <Card>
                                        <CardContent className="relative !p-0 aspect-square overflow-hidden">
                                            <Image
                                                src={product?.imgUrl}
                                                alt={product?.title}
                                                width={300}
                                                height={300}
                                                className='w-full h-full object-cover rounded-lg'
                                            />

                                            <div className='absolute z-10 space-y-2 text-white left-10 bottom-10 laptop:left-5 laptop:bottom-5'>
                                                <h4 className='text-sm laptop:text-lg font-thin'>{product?.title}</h4>
                                                <p className='text-2xl font-semibold w-3/4 laptop:w-4/5'>
                                                    {product?.description.length > 35 ? product?.description.slice(0, 35) + "..." : product?.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        ) : (
                            <div className='flex items-center justify-center gap-8'>
                                <Skeleton className="size-[300px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[300px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[300px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[300px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[300px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                            </div>
                        )
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}