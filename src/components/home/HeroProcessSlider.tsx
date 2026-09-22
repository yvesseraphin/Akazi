"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./HeroProcessSlider.module.css";

interface ProcessSlide {
  id: number;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

const PROCESS_SLIDES: ProcessSlide[] = [
  {
    id: 1,
    imageSrc: "/images/hero/vetting-process.webp",
    imageAlt: "Rwandan apprentices during intensive German language training in Kigali",
    caption: "Intensive German language training up to B2 level in Kigali.",
  },
  {
    id: 2,
    imageSrc: "/images/hero/Legal.webp",
    imageAlt: "Visa processing and compliance under German immigration law",
    caption: "Fast-track visa processing and full German immigration compliance.",
  },
  {
    id: 3,
    imageSrc: "/images/hero/Hero.webp",
    imageAlt: "Rwandan apprentice and German company mentor collaborating at work",
    caption: "Smooth arrival, company integration, and continuous mentorship.",
  },
];

export const HeroProcessSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const totalSlides = PROCESS_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, goToNextSlide]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextSlide();
    }
  };

  return (
    <div
      className={styles.sliderContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Akazi talent placement process"
      tabIndex={0}
    >
      <div className={styles.mediaViewport}>
        {PROCESS_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const shouldRenderImage = index === 0 || isMounted;
          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : styles.slideInactive}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.caption}`}
              aria-hidden={!isActive}
            >
              <div className={styles.imageWrapper}>
                {shouldRenderImage && (
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                    className={styles.slideImage}
                  />
                )}
                <div className={styles.imageScrim} />
                <p className={styles.captionText}>{slide.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={styles.indicatorsTrack}
        role="tablist"
        aria-label="Process slide indicators"
      >
        {PROCESS_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}: ${slide.caption}`}
              className={`${styles.indicatorDot} ${isActive ? styles.indicatorDotActive : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.visuallyHidden}>
                Slide {index + 1}: {slide.caption}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
