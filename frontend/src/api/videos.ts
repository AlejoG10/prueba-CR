import type { VideosApiResponse } from '../types/videos'

const API_BASE = 'http://localhost:3001/api'

export async function fetchVideos(page: number): Promise<VideosApiResponse> {
  const res = await fetch(`${API_BASE}/videos?page=${page}`)

  if (!res.ok) {
    throw new Error('Error al obtener los videos')
  }

  return res.json()
}
