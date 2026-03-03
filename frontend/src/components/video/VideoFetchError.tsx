import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface VideoFetchErrorProps {
  error: Error;
  refetch: () => void;
}

export function VideoFetchError({ error, refetch }: VideoFetchErrorProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
        <Button variant="outline" onClick={refetch} className="mt-2">
          Reintentar
        </Button>
      </Alert>
    </div>
  );
}
