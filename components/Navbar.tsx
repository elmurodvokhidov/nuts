'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/logo.png'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const t = useTranslations('navbar');
    const pathname = usePathname();
    console.log(pathname);

    return (
        <nav className="py-4 px-8 relative z-10">
            <div className="flex items-center sm:gap-20 gap-10">
                <Image
                    width={150}
                    height={150}
                    src={logo}
                    alt="logo"
                />

                <div className="flex sm:gap-10 gap-5 items-center">
                    <Link href="/" className={cn(pathname === "/" && "active", "text-base text-black capitalize")}>
                        {t('link1')}
                    </Link>
                    <Link href="/products" className={cn(pathname === "/products" && "active", "text-base text-black capitalize")}>
                        {t('link2')}
                    </Link>
                    <Link href="/about" className={cn(pathname === "/about" && "active", "text-base text-black capitalize")}>
                        {t('link3')}
                    </Link>
                    <Link href="/contact" className={cn(pathname === "/contact" && "active", "text-base text-black capitalize")}>
                        {t('link4')}
                    </Link>
                    <LocaleSwitcher />
                </div>
            </div>
        </nav>
    )
}