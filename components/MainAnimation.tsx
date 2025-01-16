"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import animationData from "@/public/animation/video-bg-green.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface MainAnimationProps {
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

const MainAnimation: FC<MainAnimationProps> = ({
    className = "size-[300px]",
    loop = true,
    autoplay = true,
}) => {
    return (
        <div className={className}>
            <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
        </div>
    );
};

export default MainAnimation;