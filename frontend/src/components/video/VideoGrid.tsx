import { AlertCircle, ChevronLeft, ChevronRight, Inbox } from "lucide-react";

import type { VideosDataResponse } from "@/types/videos";
import { reorderForLayout } from "@/lib/videos";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoAlert } from "@/components/video/VideoAlert";
import { Heading } from "@/components/shared/Heading";

interface VideoGridProps {
  videos: VideosDataResponse[];
  error: Error | null;
  featuredVideoId: string | null;
  page: number;
  totalPages: number;
  setPage: (p: number | ((prev: number) => number)) => void;
  refetch: () => void;
}

export function VideoGrid({
  videos,
  error,
  featuredVideoId,
  page,
  totalPages,
  setPage,
  refetch,
}: VideoGridProps) {
  if (error) {
    return (
      <div className="container mx-auto flex min-h-0 flex-1 flex-col py-6 px-4">
        <Heading />
        
        <Separator className="mb-6" />

        <VideoAlert
          icon={AlertCircle}
          title="Error"
          description={error.message}
          variant="destructive"
          action={{ label: "Reintentar", onClick: () => refetch() }}
        />
      </div>
    );
  }

  if (!videos?.length) {
    return (
      <div className="container mx-auto flex min-h-0 flex-1 flex-col py-6 px-4">
        <Heading />
        
        <Separator className="mb-6" />
        
        <VideoAlert
          icon={Inbox}
          title="Sin videos"
          description="No hay videos disponibles"
        />
      </div>
    );
  }

  const isFirstPage = page === 1;
  const displayVideos = isFirstPage
    ? reorderForLayout(videos, featuredVideoId)
    : videos;

  return (
    <div className="container mx-auto flex min-h-0 flex-1 flex-col py-6 px-4">
      <Heading />

      <Separator className="mb-6" />

      <div className="flex flex-col">
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 grid-auto-rows-[auto]">
          {displayVideos.map((video) =>
            isFirstPage && video.id === featuredVideoId ? (
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
  );
}
