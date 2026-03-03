export interface VideoSnippet {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
        high: {
            url: string
        }
    };
}

export interface VideoStatistics {
    viewCount: string;
    likeCount: string;
    commentCount?: string;
}

export interface VideoItem {
    id: string;
    snippet: VideoSnippet;
    statistics: VideoStatistics;
}

export interface VideosMockDataResponse {
    kind: string;
    items: VideoItem[];
}

export interface VideosDataResponse {
    id: string;
    thumbnail: string;
    title: string;
    author: string;
    publishedAtRelative: string;
    hypeLevel: number;
}

export interface VideosApiResponse {
    data: VideosDataResponse[];
    totalPages: number;
}
