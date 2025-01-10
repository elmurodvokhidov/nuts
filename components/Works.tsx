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


export default function Works() {
    const t = useTranslations('works');

    return (
        <div className='px-8 my-32 space-y-16'>
            <div className='flex flex-col items-center gap-5'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1'>{t('text2')}</h1>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-6xl m-auto select-none"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-10">
                            <Card>
                                <CardContent className="relative !p-0 aspect-square overflow-hidden">
                                    <Image
                                        src={`/images/product${index + 1}.jpg`}
                                        alt="work"
                                        width={300}
                                        height={300}
                                        className='w-full h-full object-cover rounded-lg'
                                    />

                                    <div className='absolute z-10 space-y-2 text-white left-10 bottom-10'>
                                        <h4 className='text-sm font-thin'>{t('text3')}</h4>
                                        <p className='text-2xl font-semibold w-3/4'>{t('text4')}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}