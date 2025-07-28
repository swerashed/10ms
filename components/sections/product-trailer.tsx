"use client"
import Image from "next/image";
import { useState, useMemo } from "react";
import ArrowIcon from "../icons/arrow-icon";
import PlayIcon from "../icons/play-icon";
import { ProductTrailerProps } from "@/types/page-component-props";


const ProductTrailer = ({ data }: ProductTrailerProps) => {
  // 1. State hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const previewGallery = useMemo(
    () => data.filter((item) => item.name === "preview_gallery"),
    [data]
  );

  // 2. Functions/handlers
  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % previewGallery.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + previewGallery.length) % previewGallery.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const handlePlay = () => {
    if (currentItem?.resource_type === "video") {
      setIsPlaying(true);
    }
  };
  // 3. useEffect or other hooks
  if (previewGallery.length === 0) {
    return null;
  }
  const currentItem = previewGallery[currentIndex];

  const mainDisplaySrc =
    currentItem.resource_type === "video"
      ? currentItem.thumbnail_url
      : currentItem.resource_value;

  // Render nothing if the determined src is not valid
  if (!mainDisplaySrc) return null;
  // 4. scope component or mini component



  return (
    <div className="w-full bg-transparent">
      <div className="p-1 block rounded-lg overflow-hidden lg:rounded-none">
        <div className="relative overflow-hidden bg-black youtube-video aspect-video select-none  rounded-lg lg:rounded-none">
          {isPlaying && currentItem.resource_type === "video" ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="relative">
              {currentItem.resource_type === "video" && (
                <span
                  onClick={handlePlay}
                  className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <PlayIcon />
                </span>
              )}
              <div className="thumb-wrap">
                <Image
                  key={currentIndex}
                  alt={currentItem.name}
                  priority
                  width={867}
                  height={480}
                  className="w-full transition-opacity duration-300 ease-in-out"
                  src={mainDisplaySrc}
                />
              </div>
            </div>
          )}

          {previewGallery.length > 1 && (
            <div className="navigation">
              <div
                onClick={handlePrev}
                className="absolute prev-btn left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
              >
                <ArrowIcon />
              </div>
              <div
                onClick={handleNext}
                className="absolute next-btn right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
              >
                <ArrowIcon variant="next" />
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 py-4 pl-1 overflow-x-auto no-scrollbar">
          {previewGallery.map((item, index) => {
            const thumbnailSrc =
              item.resource_type === "video"
                ? item.thumbnail_url
                : item.resource_value;

            // Don't render a thumbnail if it has no valid image source
            if (!thumbnailSrc) return null;

            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="flex-shrink-0"
              >
                <div
                  className={`relative w-[55px] aspect-video rounded cursor-pointer overflow-hidden outline ${isActive
                    ? "outline-[2px] outline-offset-2 outline-[#1CAB55]"
                    : "outline-none"
                    }`}
                >
                  <Image
                    alt={item.name}
                    loading="lazy"
                    width={86}
                    height={50}
                    className="object-cover w-full h-full"
                    src={thumbnailSrc}
                  />
                  {item.resource_type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-20">
                      <Image
                        alt="Play The Video"
                        width={20}
                        height={20}
                        src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductTrailer;
