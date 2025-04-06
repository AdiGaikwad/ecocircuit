import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleFullscreenPrevious = () => {
    setFullscreenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleFullscreenNext = () => {
    setFullscreenIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setFullscreenOpen(true);
  };

  // If no images are provided, use a placeholder
  const displayImages = images.length > 0 
    ? images 
    : ['/placeholder.svg?height=600&width=600'];

  return (
    <div className="w-full">
      <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
        <div className="relative aspect-square w-full">
          <Image
            src={displayImages[activeIndex] || "/placeholder.svg"}
            alt={`${title} - Image ${activeIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
        
        {displayImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={() => openFullscreen(activeIndex)}
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                index === activeIndex
                  ? 'border-purple-600'
                  : 'border-transparent hover:border-purple-300'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative aspect-video w-full">
            <Image
              src={displayImages[fullscreenIndex] || "/placeholder.svg"}
              alt={`${title} - Fullscreen Image ${fullscreenIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          {displayImages.length > 1 && (
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={handleFullscreenPrevious}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <span className="flex h-10 items-center justify-center text-sm">
                {fullscreenIndex + 1} / {displayImages.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleFullscreenNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
