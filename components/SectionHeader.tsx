import HomeRightSide from "./HomeRightSide";

export default function SectionHeader({
    title,
    description,
    src,
}: {
    title: string,
    description: string,
    src: string,
}) {
    return (
        <main className="flex justify-between pb-52">
            {/* Bosh sahifaning chap qismi */}
            <aside className="xl:w-2/5 sm:w-4/5 w-full text-black flex flex-col gap-6 items-start mt-52 px-20 relative z-10">
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold tracking-wider">
                    {title}
                </h1>
                <p className="text-base tracking-wider">
                    {description}
                </p>
            </aside>

            {/* Bosh sahifaning o'ng qismi */}
            <HomeRightSide src={src} />
        </main>
    )
}