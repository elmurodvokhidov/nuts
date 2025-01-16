import Image from 'next/image'
import logo from '@/public/images/logo.png'
import Link from 'next/link'
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className='relative z-10 flex flex-wrap justify-between items-start gap-16 py-10 px-12 pb-20 bg-dots-pattern bg-dots'>
            <div className='flex flex-col gap-4'>
                <Image
                    width={150}
                    height={150}
                    src={logo}
                    alt="logo"
                />

                <p className='text-base laptop:text-xl text-gray-600'>{t('footer.text1')}</p>

                <div className='footer_social flex items-center gap-2'>
                    <Link href="#">
                        <Instagram strokeWidth={1.5} className='size-5 laptop:size-6' />
                    </Link>
                    <Link href="#">
                        <Facebook strokeWidth={1.5} className='size-5 laptop:size-6' />
                    </Link>
                    <Link href="#">
                        <Linkedin strokeWidth={1.5} className='size-5 laptop:size-6' />
                    </Link>
                    <Link href="#">
                        <Youtube strokeWidth={1.5} className='size-5 laptop:size-6' />
                    </Link>
                </div>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-2xl laptop:text-3xl font-bold text-black mb-4'>{t('footer.title1')}</h4>
                <Link href="/" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link1')}
                </Link>
                <Link href="/products" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link2')}
                </Link>
                <Link href="/about" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link3')}
                </Link>
                <Link href="/contact" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link4')}
                </Link>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-2xl laptop:text-3xl font-bold text-black mb-4'>{t('footer.title2')}</h4>
                <Link href="/" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link1')}
                </Link>
                <Link href="/products" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link2')}
                </Link>
                <Link href="/about" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link3')}
                </Link>
                <Link href="/contact" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link4')}
                </Link>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-2xl laptop:text-3xl font-bold text-black mb-4'>{t('footer.title3')}</h4>
                <Link href="/" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link1')}
                </Link>
                <Link href="/products" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link2')}
                </Link>
                <Link href="/about" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link3')}
                </Link>
                <Link href="/contact" className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('navbar.link4')}
                </Link>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-2xl laptop:text-3xl font-bold text-black mb-4'>{t('footer.title4')}</h4>
                <Link href="https://t.me/elmurodvkh" target='_blank' className="text-base laptop:text-xl text-gray-500 capitalize hover:underline">
                    {t('footer.text2')}
                </Link>
                <Link href="#" className="text-base laptop:text-xl text-gray-500 hover:underline">
                    company@name.com
                </Link>
                <button className='text-xl laptop:text-2xl text-red-400 underline'>
                    998 (33) 004-08-04
                </button>
            </div>
        </footer>
    )
}