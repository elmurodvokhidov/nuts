import { GLOBAL_SERVER_URL } from "@/constants";

export const getVideoByType = async (type: string) => {
    const res = await fetch(`${GLOBAL_SERVER_URL}/videos/${type}`);
    if (!res.ok) {
        throw new Error('Failed to fetch video data');
    }
    const data = await res.json();
    return data.videoUrl;
}