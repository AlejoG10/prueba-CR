import { getFeaturedVideoId } from "@/lib/videos";
import { useVideos } from "@/hooks/useVideos";
import { VideoGrid } from "@/components/video/VideoGrid";
import { VideoGridSkeleton } from "@/components/video/VideoGridSkeleton";

export function VideosPage() {
  const {
    data: videos,
    loading,
    error,
    page,
    totalPages,
    setPage,
    refetch,
  } = useVideos();

  const featuredVideoId = getFeaturedVideoId(videos ?? []);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {loading ? (
        <VideoGridSkeleton />
      ) : (
        <VideoGrid
          videos={videos ?? []}
          error={error}
          featuredVideoId={featuredVideoId}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          refetch={refetch}
        />
      )}
    </div>
  );
}
