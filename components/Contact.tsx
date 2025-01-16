import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <div className='md:my-40 my-32 relative z-10 bg-black'>
            <Image
                src="/images/contact-bg.jpg"
                alt="contact"
                width={1920}
                height={1800}
                className='h-[550px] laptop:h-[600px] relative z-0 object-cover'
            />

            <div className='absolute top-5 md:right-[15%] right-0 flex items-center justify-center'>
                <Image
                    src="/images/bg-2.png"
                    alt="shape"
                    width={500}
                    height={500}
                    className='relative z-0 laptop:size-[550px]'
                />
                <div className='w-4/6 text-center flex flex-col items-center md:gap-10 gap-5 font-semibold text-white absolute z-10'>
                    <h1 className='laptop:text-5xl md:text-4xl sm:text-3xl text-2xl'>{t('text1')}</h1>
                    <p className='laptop:text-xl md:text-base sm:text-sm text-xs font-normal'>{t('text2')}</p>
                    <button className='laptop:text-2xl md:text-lg md:py-4 sm:py-2 py-1 md:px-9 sm:px-6 px-4 rounded-full border border-white capitalize hover:bg-white transition-all duration-300 hover:text-pink'>
                        {t('text3')}
                    </button>
                </div>
            </div>
        </div>
    )
}