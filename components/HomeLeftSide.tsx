'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export default function HomeLeftSide() {
    const t = useTranslations('section1');

    return (
        <aside className="xl:w-2/5 sm:w-4/5 w-full text-black flex flex-col gap-6 items-start mt-32 px-20 relative z-10">
            <p className="text-pink text-[14px] font-thin border border-pink px-4 py-[1.5px] rounded-xl bg-white">
                {t('text1')}
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold tracking-wider">
                {t('text2')}
            </h1>
            <p className="text-base tracking-wider">
                {t('text3')}
            </p>
            <button className="gradient bg-pink md:py-4 py-2 md:px-9 px-6 rounded-3xl border-none text-lg capitalize text-white">
                {t('text4')}
            </button>
        </aside>
    )
}