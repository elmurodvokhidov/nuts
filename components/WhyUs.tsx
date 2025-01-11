import { useTranslations } from 'next-intl';
import InfiniteCarousel from './InfiniteCarousel';

export default function WhyUs() {
    const t = useTranslations('whyus');

    return (
        <div className='md:px-16 px-2 space-y-10'>
            <div className='flex flex-col items-center gap-5 border-b border-gray-200 pb-10'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1'>{t('text2')}</h1>
            </div>

            <div className='flex flex-wrap items-center md:gap-20 gap-10 py-8'>
                <div className='flex flex-wrap gap-4 md:gap-0'>
                    <div className='md:border-r md:border-gray-200 md:w-52 w-full md:pr-12'>
                        <h1 className='text-4xl text-pink font-bold'>450+</h1>
                        <p className='text-sm text-gray-600 font-semibold'>{t('text3')}</p>
                    </div>
                    <div className='md:w-52 w-full md:pl-12'>
                        <h1 className='text-4xl text-pink font-bold'>860</h1>
                        <p className='text-sm text-gray-600 font-semibold'>{t('text4')}</p>
                    </div>
                </div>

                <div className='space-y-5'>
                    <p className='text-lg text-gray-700 tracking-wide'>{t('text5')}</p>
                    <p className='text-lg text-gray-700 tracking-wide'>{t('text6')}</p>
                </div>
            </div>

            <InfiniteCarousel />
        </div>
    )
}
