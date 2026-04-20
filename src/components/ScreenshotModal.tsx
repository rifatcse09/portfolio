import { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type GalleryImage = { src: string; label: string };

type ScreenshotModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: GalleryImage[];
  title: string;
};

const ZOOM_LEVELS = [1, 1.25, 1.5, 2, 2.5, 3];
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export function ScreenshotModal({
  open,
  onOpenChange,
  images,
  title,
}: ScreenshotModalProps) {
  const [zoom, setZoom] = useState(1);

  const zoomIn = useCallback(() => {
    setZoom((z) => {
      const next = ZOOM_LEVELS.find((l) => l > z) ?? MAX_ZOOM;
      return Math.min(next, MAX_ZOOM);
    });
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = ZOOM_LEVELS.filter((l) => l < z).pop() ?? MIN_ZOOM;
      return Math.max(next, MIN_ZOOM);
    });
  }, []);

  const resetZoom = useCallback(() => setZoom(1), []);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!next) setZoom(1);
      onOpenChange(next);
    },
    [onOpenChange]
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-[90vh] p-4 flex flex-col gap-0 border-0 bg-background/95 backdrop-blur-xl shadow-2xl">
        <DialogHeader className="flex flex-row items-center justify-between gap-4 shrink-0 pb-2 border-b pr-10">
          <DialogTitle className="text-lg font-semibold">{title} — Screenshots</DialogTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              title="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              title="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={resetZoom}
              title="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 min-h-0 flex flex-col pt-4">
          <Carousel
            className="flex-1 w-full"
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent className="-ml-0 h-full">
              {images.map((img, i) => (
                <CarouselItem key={i} className="pl-0 h-full">
                  <div className="flex flex-col h-full gap-2">
                    <div className="flex-1 min-h-0 overflow-auto rounded-lg border bg-muted/30 flex items-start justify-center p-2">
                      <img
                        src={img.src}
                        alt={img.label}
                        className="max-w-full h-auto object-contain transition-transform duration-200"
                        style={{ transform: `scale(${zoom})`, transformOrigin: "center top" }}
                        draggable={false}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center shrink-0 font-medium">
                      {img.label}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 border-2 bg-background/90 hover:bg-background" />
            <CarouselNext className="right-4 border-2 bg-background/90 hover:bg-background" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
