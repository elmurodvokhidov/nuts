"use client";

import Image from "next/image";
import logo from '@/public/images/logo.png'
import LocaleSwitcher from "./LocaleSwitcher";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "./ui/sheet";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('navbar');

    return (
        <div className="floating-nav lg:hidden block fixed inset-x-0 top-4 z-50 h-16 border-none sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <div className="py-4 px-8 flex items-center justify-between sm:gap-20 gap-10">
                    <Image
                        width={150}
                        height={150}
                        src={logo}
                        alt="logo"
                    />

                    <div className="flex items-center gap-4">
                        <LocaleSwitcher />
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger>
                                <Image
                                    src="/icons/menu.svg"
                                    width={30}
                                    height={30}
                                    alt="search"
                                />
                            </SheetTrigger>
                            <SheetContent className="h-screen px-3">
                                <nav className="flex flex-col gap-8 justify-center items-start pl-10">
                                    <Link href="/" className={cn(pathname === "/" && "active", "text-lg text-black capitalize")}>
                                        {t('link1')}
                                    </Link>
                                    <Link href="/products" className={cn(pathname === "/products" && "active", "text-lg text-black capitalize")}>
                                        {t('link2')}
                                    </Link>
                                    <Link href="/about" className={cn(pathname === "/about" && "active", "text-lg text-black capitalize")}>
                                        {t('link3')}
                                    </Link>
                                    <Link href="/contact" className={cn(pathname === "/contact" && "active", "text-lg text-black capitalize")}>
                                        {t('link4')}
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </div>
    )
}