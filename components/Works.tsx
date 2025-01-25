'use client';

import { useTranslations } from 'next-intl';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react';
import { GLOBAL_SERVER_URL } from '@/constants';
import { Skeleton } from './ui/skeleton';

export default function Works() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('works');

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${GLOBAL_SERVER_URL}/products`);
            const data = await response.json();
            setProducts(data);
            setIsLoading(false);
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
                        isLoading ? (
                            <div className='flex items-center justify-center gap-8'>
                                <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                            </div>
                        ) :
                            products.length > 0 ? (
                                products.map((product: Product, index: number) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 laptop:basis-1/4 pl-10">
                                        <div className="product__card relative h-[400px] bg-white overflow-hidden rounded-2xl transition-[transform 0.3s ease, box-shadow 0.3s ease]">
                                            <header className="product__card__thumb h-[300px] overflow-hidden bg-black">
                                                <img
                                                    src={product.imgUrl}
                                                    alt={product.title}
                                                    width={370}
                                                    height={245}
                                                    className='w-full h-full object-cover block opacity-100'
                                                />
                                            </header>
                                            <div className="product__card__body">
                                                <h2 className="text-black text-2xl font-bold uppercase">
                                                    {product.title}
                                                </h2>
                                                <p className="product__card__description absolute left-5 right-5 pt-4 text-[#666C74] opacity-0">
                                                    {product.description.length > 230 ? product?.description.slice(0, 230) + "..." : product?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))
                            ) : (
                                <div className='flex items-center justify-center gap-8'>
                                    <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                    <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                    <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                    <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
                                    <Skeleton className="size-[320px] md:basis-1/2 lg:basis-1/3 laptop:basis-1/4" />
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