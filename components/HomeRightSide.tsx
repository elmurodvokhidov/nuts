import MainAnimation from './MainAnimation'

export default function HomeRightSide({ src }: { src: string }) {
    return (
        <aside>
            <MainAnimation className="size-[1010px] absolute -top-[250px] -right-[210px] hidden lg:block" />
            <div className="hidden w-[900px] h-[900px] absolute -top-[250px] -right-[300px] rounded-full -skew-y-[15deg] rotate-[20deg] overflow-hidden lg:block">
                <video
                    src={src}
                    loop
                    muted
                    autoPlay
                    className="size-full absolute z-10 skew-y-[15deg] -rotate-[20deg] scale-150 -translate-x-24 -translate-y-10"
                />
            </div>
        </aside>
    )
}