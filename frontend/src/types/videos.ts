export interface VideosDataResponse {
  id: string
  thumbnail: string
  title: string
  author: string
  publishedAtRelative: string
  hypeLevel: number
}

export interface VideosApiResponse {
  data: VideosDataResponse[]
  totalPages: number
}
