import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomeLeftSide() {
    const t = useTranslations('section1');

    return (
        <aside className="xl:w-1/2 sm:w-4/5 w-full text-black flex flex-col gap-6 items-start mt-32 md:mt-40 lg:mt-52 px-10 md:px-20 relative z-10">
            <p className="text-red-500 border-red-400 text-[14px] laptop:text-lg font-thin border px-4 py-[1.5px] rounded-xl bg-white">
                {t('text1')}
            </p>
            <h1 className="laptop:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-wider text-white sm:text-black">
                {t('text2')}
            </h1>
            <p className="laptop:text-xl text-base tracking-wider text-white sm:text-black">
                {t('text3')}
            </p>
            <Link href="https://t.me/elmurodvkh" target="_blank" className="gradient md:py-4 py-2 md:px-9 px-6 rounded-3xl border-none text-lg laptop:text-xl capitalize text-white">
                {t('text4')}
            </Link>
        </aside>
    )
}