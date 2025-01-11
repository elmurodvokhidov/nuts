import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function About() {
    const t = useTranslations('about');

    return (
        <div className='flex flex-wrap items-center justify-center lg:gap-[150px] md:gap-[100px] gap-[50px]'>
            <Image
                src="/images/about.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />

            <div className='lg:w-[45%] md:w-[85%] sm:w-full flex flex-col items-start md:gap-8 gap-6'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1 !text-left !w-full'>{t('text2')}</h1>
                <p className='text-base text-gray-500'>{t('des1')}</p>
                <p className='text-base text-gray-500'>{t('des2')}</p>
            </div>
        </div>
    )
}