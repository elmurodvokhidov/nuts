import { Nut } from 'lucide-react';
import { useTranslations } from 'next-intl';

function ProductCard({ txt, des }: { txt: string, des: string }) {
    return (
        <div className='product_card'>
            <h3 className='text-2xl text-black font-semibold'>{txt}</h3>
            <div className='size-20 bg-red-100 rounded-full flex items-center justify-center relative z-10'>
                <Nut className='size-16 text-black' strokeWidth={1} />
            </div>
            <p className='text-base text-black font-thin'>{des}</p>
            <div className='card_decoration' />
        </div>
    )
}

export default function Products() {
    const t = useTranslations('products');

    return (
        <div className='md:space-y-28 space-y-16 px-4 md:px-8 mt-8'>
            <div className='flex flex-col items-center gap-5'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1'>{t('text2')}</h1>
            </div>

            <div className='flex flex-wrap items-center md:justify-between justify-center gap-10'>
                <ProductCard
                    txt={t('title1')}
                    des={t('des1')}
                />
                <ProductCard
                    txt={t('title1')}
                    des={t('des1')}
                />
                <ProductCard
                    txt={t('title1')}
                    des={t('des1')}
                />
                <ProductCard
                    txt={t('title1')}
                    des={t('des1')}
                />
            </div>
        </div>
    )
}