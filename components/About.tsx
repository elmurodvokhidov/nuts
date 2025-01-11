import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function About() {
    const t = useTranslations('about');

    return (
        <div className='flex items-center justify-center gap-[150px]'>
            <Image
                src="/images/about.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />

            <div className='w-[45%] flex flex-col items-start gap-8'>
                <p className='p'>{t('text1')}</p>
                <h1 className='h1 !text-left !w-full'>{t('text2')}</h1>
                <p className='text-base text-gray-500'>{t('des1')}</p>
                <p className='text-base text-gray-500'>{t('des2')}</p>
            </div>
        </div>
    )
}