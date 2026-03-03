import { Star } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { VideosDataResponse } from "@/types/videos";
import { getStarRating } from "@/lib/videos";

interface VideoCardProps {
  video: VideosDataResponse;
  featured?: boolean;
  maxHypeLevel: number;
}

export function VideoCard({ video, featured = false, maxHypeLevel }: VideoCardProps) {
  const stars = getStarRating(video.hypeLevel, maxHypeLevel);
  return (
    <Card
      className={
        featured
          ? "h-full flex flex-col overflow-hidden border-2 border-rose-400 shadow-xl shadow-rose-200/50 ring-2 ring-rose-300/50 ring-offset-1"
          : "h-full w-full overflow-hidden"
      }
    >
      <div
        className={
          featured
            ? "relative aspect-video flex-1 min-h-0"
            : "aspect-video relative"
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

      <CardHeader className="p-3 flex flex-col gap-3">
        <p
          className={
            featured
              ? "font-semibold line-clamp-2"
              : "font-medium line-clamp-2 text-sm"
          }
        >
          {video.title}
        </p>

        <div className="flex flex-col gap-1">
          <p
            className={
              featured
                ? "text-[15px] text-muted-foreground"
                : "text-[13px] text-muted-foreground"
            }
          >
            {video.author}
          </p>
          <p
            className={
              featured
                ? "text-sm text-muted-foreground"
                : "text-xs text-muted-foreground"
            }
          >
            {video.publishedAtRelative}
          </p>
        </div>

        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) =>
            i <= stars ? (
              <Star
                key={i}
                className="h-4 w-4 fill-rose-400 text-rose-400"
                strokeWidth={1.5}
              />
            ) : (
              <Star
                key={i}
                className="h-4 w-4 text-muted-foreground/40"
                fill="none"
                strokeWidth={1.5}
              />
            )
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
