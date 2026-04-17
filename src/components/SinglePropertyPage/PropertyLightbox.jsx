import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PropertyLightbox = ({ images, initialIndex = 0, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (!hasMultipleImages) {
        return;
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, images.length, onClose]);

  if (!images?.length) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[80] bg-black/90 px-4 py-6 md:px-10" role="dialog" aria-modal="true">
      <div className="mx-auto flex h-full max-w-[1400px] flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 text-white">
          <div>
            <p className="font-primary text-[18px] font-medium md:text-[22px]">{title}</p>
            <p className="mt-1 font-primary text-[13px] uppercase tracking-[0.24em] text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-6">
          {hasMultipleImages ? (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-3 text-white transition hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          ) : null}

          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          />

          {hasMultipleImages ? (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-3 text-white transition hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyLightbox;
