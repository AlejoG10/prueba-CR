import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/shared/Heading";

export function VideoGridSkeleton() {
  return (
    <div className="container mx-auto flex min-h-0 flex-1 flex-col py-6 px-4">
      <Heading />

      <Separator className="mb-6" />

      <div className="flex flex-col">
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 grid-auto-rows-[auto]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="min-w-0 w-full">
              <Card className="shadow-none h-full w-full overflow-hidden">
                <Skeleton className="aspect-video w-full rounded-t-xl rounded-b-none" />
                <CardHeader className="p-3 space-y-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-3 w-1/3" />
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex shrink-0 items-center justify-center gap-2 py-6">
        <Skeleton className="h-9 w-9 rounded-md" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-9 w-9 rounded-md" />
      </div>
    </div>
  );
}
