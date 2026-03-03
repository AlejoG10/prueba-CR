import { useState, useEffect, useCallback } from 'react'
import { fetchVideos } from '../api/videos'
import type { VideosDataResponse } from '../types/videos'

export function useVideos() {
  const [data, setData] = useState<VideosDataResponse[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const res = await fetchVideos()
      setData(res.data)
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Error desconocido'))
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, loading, error, refetch }
}
