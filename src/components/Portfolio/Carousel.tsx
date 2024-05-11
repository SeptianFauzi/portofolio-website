"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Carousel({ images }: { images: StaticImageData[] }) {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const handleScrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 overflow-scroll">
      {/* Image Container */}
      <div className="relative overflow-x-scroll w-full">
        <button
          className="absolute
          left-2 top-1/2 rounded-full border border-slate-600 size-8 flex justify-center items-center"
          onClick={handleScrollLeft}
        >
          <FaChevronLeft />
        </button>
        <div
          className="flex overflow-x-scroll gap-6 snap-x snap-mandatory scroll-smooth"
          id="image-container"
          ref={imageContainerRef}
        >
          {/* Image 1 */}
          {images &&
            images.map((image, index) => (
              <Image
                id="image-1"
                src={image}
                className="h-96 w-full rounded-md border border-slate-200 snap-center object-contain"
                alt="Image 1"
                width={3000}
                height={1000}
                key={index}
              />
            ))}
        </div>
        <button
          className="absolute right-2 top-1/2 rounded-full border border-slate-600 size-8 flex justify-center items-center "
          onClick={handleScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
