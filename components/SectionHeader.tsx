"use client";

import { useTranslations } from "next-intl";
import HomeRightSide from "./HomeRightSide";
import Navbar from "./Navbar";

export default function SectionHeader({
    title,
    description,
    src,
}: {
    title: string;
    description: string;
    src: string;
}) {
    const t = useTranslations();

    return (
        <section className="section1">
            <Navbar />

            <main className="h-[750px] flex justify-between">
                <aside className="laptop:w-1/2 xl:w-2/5 sm:w-4/5 w-full text-black flex flex-col gap-6 items-start mt-52 px-20 relative z-10">
                    <h1 className="laptop:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-wider">
                        {t(title)}
                    </h1>
                    <p className="text-base laptop:text-xl tracking-wider whitespace-break-spaces">
                        {t(description)}
                    </p>
                </aside>

                <HomeRightSide src={src} />
            </main>
        </section>
    )
}