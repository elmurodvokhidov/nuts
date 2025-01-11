import MainAnimation from './MainAnimation'

export default function HomeRightSide({ src }: { src: string }) {
    return (
        <aside>
            <MainAnimation className="main_animation" />
            <div className="main_video">
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