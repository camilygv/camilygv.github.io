import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "../lib/gsap";
import { asset } from "../lib/asset";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; caption?: string }[];
  initialIndex: number;
}

export default function ImageModal({ isOpen, onClose, images, initialIndex }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Reset to initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Trap focus
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goToPrev();
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          goToNext();
        }
        // Trap Tab focus
        if (e.key === "Tab") {
          const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      // Focus close button initially
      setTimeout(() => closeRef.current?.focus(), 0);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Animation on image change
  const prevIndexRef = useRef(currentIndex);
  useEffect(() => {
    if (!isOpen) return;
    if (prevIndexRef.current !== currentIndex) {
      const img = imgRef.current;
      if (img) {
        gsap.fromTo(img, 
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );
      }
      prevIndexRef.current = currentIndex;
    }
  }, [currentIndex, isOpen]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      ref={modalRef}
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ${currentIndex + 1} de ${images.length}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="image-modal__backdrop" aria-hidden="true" />
      <div className="image-modal__content">
        <button
          ref={closeRef}
          className="image-modal__close"
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button
          ref={prevRef}
          className="image-modal__nav image-modal__nav--prev"
          onClick={goToPrev}
          aria-label="Imagen anterior"
          disabled={images.length <= 1}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <figure className="image-modal__figure">
          <img
            ref={imgRef}
            src={asset(currentImage.src)}
            alt={currentImage.alt}
            loading="eager"
          />
          {currentImage.caption && (
            <figcaption className="image-modal__caption">{currentImage.caption}</figcaption>
          )}
        </figure>

        <button
          ref={nextRef}
          className="image-modal__nav image-modal__nav--next"
          onClick={goToNext}
          aria-label="Siguiente imagen"
          disabled={images.length <= 1}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="image-modal__counter" aria-hidden="true">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}