'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import logo from '@/public/images/logo.png'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import MobileNav from './MobileNav';

export default function Navbar() {
    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const { y: currentScrollY } = useWindowScroll();

    const t = useTranslations('navbar');
    const pathname = usePathname();

    useEffect(() => {
        if (navContainerRef.current) {
            if (currentScrollY === 0) {
                setIsNavVisible(true);
                navContainerRef.current.classList.remove("floating-nav");
            } else if (currentScrollY > lastScrollY) {
                setIsNavVisible(false);
                navContainerRef.current.classList.add("floating-nav");
            } else if (currentScrollY < lastScrollY) {
                setIsNavVisible(true);
                navContainerRef.current.classList.add("floating-nav");
            }
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible])

    return (
        <>
            <div ref={navContainerRef} className="hidden lg:block fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
                <header className="absolute top-1/2 w-full -translate-y-1/2">
                    <nav className="py-4 px-8 flex items-center sm:gap-20 gap-10">
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
                    </nav>
                </header>
            </div>

            {/* Mobile Navbar */}
            <MobileNav />
        </>
    )
}