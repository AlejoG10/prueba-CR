import { AlertCircle, Inbox } from "lucide-react";

import { getFeaturedVideoId } from "@/lib/videos";
import { useVideos } from "@/hooks/useVideos";
import { VideoGrid } from "@/components/video/VideoGrid";
import { VideoGridSkeleton } from "@/components/video/VideoGridSkeleton";
import { VideoAlert } from "@/components/video/VideoAlert";

export function VideosPage() {
  const { data: videos, loading, error, refetch } = useVideos();

  const featuredVideoId = getFeaturedVideoId(videos ?? []);

  if (loading) {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <VideoGridSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <VideoAlert
        icon={AlertCircle}
        title="Error"
        description={error.message}
        variant="destructive"
        action={{ label: "Reintentar", onClick: refetch }}
      />
    );
  }

  if (!videos?.length) {
    return (
      <VideoAlert
        icon={Inbox}
        title="Sin videos"
        description="No hay videos disponibles"
      />
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <VideoGrid videos={videos} featuredVideoId={featuredVideoId} />
    </div>
  );
}
