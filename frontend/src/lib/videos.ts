import type { VideosDataResponse } from "@/types/videos"

export function getFeaturedVideoId(videos: VideosDataResponse[]): string | null {
    if (videos.length === 0) {
        return null
    }

    const max = videos.reduce((a, b) => (a.hypeLevel > b.hypeLevel ? a : b))
    return max.id
}

export function reorderForLayout(videos: VideosDataResponse[], featuredVideoId: string | null): VideosDataResponse[] {
    if (!featuredVideoId) {
        return videos;
    }

    const featured = videos.find((v) => v.id === featuredVideoId);
    const others = videos.filter((v) => v.id !== featuredVideoId);

    if (!featured) {
        return videos;
    }

    return [...others.slice(0, 2), featured, ...others.slice(2)];
}