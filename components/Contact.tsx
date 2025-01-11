import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <div className='my-40 relative z-10 bg-black'>
            <Image
                src="/images/contact-bg.jpg"
                alt="contact"
                width={1920}
                height={1800}
                className='h-[550px] relative z-0 object-cover'
            />

            <div className='absolute top-5 right-[15%] flex items-center justify-center'>
                <Image
                    src="/images/bg-2.png"
                    alt="shape"
                    width={500}
                    height={500}
                    className='relative z-0'
                />
                <div className='w-4/6 text-center flex flex-col items-center gap-10 font-semibold text-white absolute z-10'>
                    <h1 className='text-4xl'>{t('text1')}</h1>
                    <p className='text-base font-normal'>{t('text2')}</p>
                    <button className='text-lg md:py-4 py-2 md:px-9 px-6 rounded-full border border-white capitalize hover:bg-white transition-all duration-300 hover:text-pink'>
                        {t('text3')}
                    </button>
                </div>
            </div>
        </div>
    )
}