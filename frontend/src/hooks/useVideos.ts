import { useState, useEffect, useCallback } from 'react'
import { fetchVideos } from '../api/videos'
import type { VideosDataResponse } from '../types/videos'

export function useVideos() {
  const [data, setData] = useState<VideosDataResponse[] | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const res = await fetchVideos(page)
      setData(res.data)
      setTotalPages(res.totalPages)
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Error aleatorio al obtener los videos'))
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, loading, error, page, totalPages, setPage, refetch, }
}
