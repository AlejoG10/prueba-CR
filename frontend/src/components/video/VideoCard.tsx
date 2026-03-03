import { Card, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { VideosDataResponse } from '@/types/videos'

interface VideoCardProps {
  video: VideosDataResponse
  featured?: boolean
}

export function VideoCard({ video, featured = false }: VideoCardProps) {
  return (
    <Card
      className={
        featured
          ? 'h-full flex flex-col overflow-hidden border-2 border-rose-400 shadow-xl shadow-rose-200/50 ring-2 ring-rose-300/50 ring-offset-1'
          : 'h-full w-full overflow-hidden'
      }
    >
      <div
        className={
          featured
            ? 'relative aspect-video flex-1 min-h-0'
            : 'aspect-video relative'
        }
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full"
        />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600">
            Top Video
          </Badge>
        )}
      </div>

      <CardHeader className="p-3">
        <p
          className={
            featured
              ? 'font-semibold line-clamp-2'
              : 'font-medium line-clamp-2 text-sm'
          }
        >
          {video.title}
        </p>
        <p
          className={
            featured
              ? 'text-sm text-muted-foreground'
              : 'text-xs text-muted-foreground'
          }
        >
          {video.author}
        </p>
        <p
          className={
            featured
              ? 'text-sm text-muted-foreground'
              : 'text-xs text-muted-foreground'
          }
        >
          {video.publishedAtRelative}
        </p>
      </CardHeader>
    </Card>
  )
}
