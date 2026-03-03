import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { VideosDataResponse } from '@/types/videos'
import { reorderForLayout } from '@/lib/videos'
import { VideoCard } from '@/components/VideoCard'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const FIRST_PAGE_SIZE = 9
const PAGE_SIZE = 12

interface VideoGridProps {
  videos: VideosDataResponse[]
  featuredVideoId: string | null
}

export function VideoGrid({ videos, featuredVideoId }: VideoGridProps) {
  const [page, setPage] = useState(1)
  const ordered = reorderForLayout(videos, featuredVideoId)
  const totalPages =
    ordered.length <= FIRST_PAGE_SIZE
      ? 1
      : 1 + Math.ceil((ordered.length - FIRST_PAGE_SIZE) / PAGE_SIZE)
  const start = page === 1 ? 0 : FIRST_PAGE_SIZE + (page - 2) * PAGE_SIZE
  const end = page === 1 ? FIRST_PAGE_SIZE : start + PAGE_SIZE
  const paginated = ordered.slice(start, end)

  return (
    <div className="container mx-auto flex min-h-0 flex-1 flex-col py-6 px-4">
      <h2 className="text-lg font-medium text-muted-foreground mb-6">
        Cartelera de Hype Tecnológico
      </h2>

      <Separator className="mb-6" />

      <div className="flex flex-col">
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 grid-auto-rows-[auto]">
          {paginated.map((video) =>
            video.id === featuredVideoId ? (
              <div key={video.id} className="col-span-2 row-span-2 min-h-0">
                <VideoCard video={video} featured />
              </div>
            ) : (
              <div key={video.id} className="min-w-0 w-full">
                <VideoCard video={video} />
              </div>
            ),
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-auto flex shrink-0 items-center justify-center gap-2 py-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="min-w-[80px] text-center text-sm text-muted-foreground">
            {page} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
