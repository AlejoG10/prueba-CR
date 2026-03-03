import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import videos from 'src/docs/mock-youtube-api.json';
import { VideosApiResponse, VideosDataResponse, VideosMockDataResponse, VideoStatistics } from 'src/types/videos';

@Injectable()
export class VideosService {

    private mockVideos: VideosMockDataResponse = videos;
    private DELAY_MIN = 500;
    private DELAY_MAX = 1500;
    private ERROR_PROB = 0.20;

    private addDelay(): Promise<void> {
        const delayMs = this.DELAY_MIN + Math.random() * (this.DELAY_MAX - this.DELAY_MIN);

        return new Promise((resolve) => setTimeout(resolve, delayMs));
    }

    private addRandomError(): void {
        if (Math.random() < this.ERROR_PROB) {
            throw new HttpException(
                'Error aleatorio al cargar videos',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    
    private transformPublishedAt(publishedAt: string): string {
        let publishedAtRelative = "";

        const date = new Date(publishedAt);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - date.getTime());
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            publishedAtRelative = "Hoy";
        } else if (diffDays === 1) {
            publishedAtRelative = "Ayer";
        } else {
            if (diffDays > 365) {
                publishedAtRelative = `Hace ${Math.floor(diffDays / 365)} año${Math.floor(diffDays / 365) > 1 ? "s" : ""}`;
            } else if (diffDays > 30) {
                publishedAtRelative = `Hace ${Math.floor(diffDays / 30)} mes${Math.floor(diffDays / 30) > 1 ? "es" : ""}`;
            } else {
                publishedAtRelative = `Hace ${diffDays} día${diffDays > 1 ? "s" : ""}`;
            }
        }

        return publishedAtRelative;
    }

    private calculateHypeLevel(title: string, stats: VideoStatistics): number {
        let hypeLevel = 0;

        const numViews = Number(stats.viewCount);
        const numLikes = Number(stats.likeCount);
        const numComments = Number(stats.commentCount);

        const hasComments = !!numComments && numComments > 0;
        const isTutorial = title.toLowerCase().includes('tutorial');

        if (hasComments) {
            hypeLevel = (numLikes + numComments) / numViews;

            if (isTutorial) {
                hypeLevel *= 2;
            }
        } else {
            hypeLevel = 0;
        }

        return hypeLevel;
    }

    async getVideos(): Promise<VideosApiResponse> {
        await this.addDelay();
        this.addRandomError();

        const data: VideosDataResponse[] = this.mockVideos.items.map((item) => ({
            id: item.id,
            thumbnail: item.snippet.thumbnails.high.url,
            title: item.snippet.title,
            author: item.snippet.channelTitle,
            publishedAtRelative: this.transformPublishedAt(item.snippet.publishedAt),
            hypeLevel: this.calculateHypeLevel(item.snippet.title, item.statistics),
        }));

        return { data, status: true, code: 200 };
    }
}
