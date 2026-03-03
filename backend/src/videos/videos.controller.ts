import { Controller, Get, Query } from '@nestjs/common';

import type { VideosApiResponse } from 'src/types/videos';
import { VideosService } from 'src/videos/videos.service';

@Controller('videos')
export class VideosController {

    constructor(private videosService: VideosService) { }

    @Get()
    async getVideos(@Query('page') page: string): Promise<VideosApiResponse> {
        return this.videosService.getVideosByPage(page);
    }

}
