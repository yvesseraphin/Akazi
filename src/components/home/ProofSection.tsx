"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./ProofSection.module.css";

const STATEMENT =
  "From selection to graduation. Disciplined, bilingual apprentices trained to certified B2 German, integrated with care, and mentored every single day throughout their 3-year vocational training.";

export const ProofSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const words = useMemo(() => STATEMENT.split(" "), []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const headerHeight = window.innerWidth <= 768 ? 72 : 96;

      const totalScrollableDistance = rect.height - (windowHeight - headerHeight);
      if (totalScrollableDistance <= 0) return;

      const scrolled = headerHeight - rect.top;
      const activeDistance = totalScrollableDistance * 0.85;

      const rawProgress = scrolled / activeDistance;
      const currentProgress = Math.min(Math.max(rawProgress, 0), 1);

      animationFrameId = requestAnimationFrame(() => {
        setProgress(currentProgress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const totalWords = words.length;
  const span = 0.06;
  const startOffset = 0.02;
  const endLimit = 0.85;

  return (
    <section ref={containerRef} className={styles.sectionWrapper} aria-label="Commitment Statement">
      <div className={styles.stickyContainer}>
        <div className={styles.statementContainer}>
          <p className={styles.statementText}>
            {words.map((word, index) => {
              const wordStart =
                totalWords > 1
                  ? startOffset + (index / (totalWords - 1)) * (endLimit - span - startOffset)
                  : startOffset;
              const wordEnd = wordStart + span;
              const wordRatio = Math.min(
                Math.max((progress - wordStart) / (wordEnd - wordStart), 0),
                1
              );
              const opacity = 0.08 + wordRatio * 0.92;

              return (
                <span
                  key={`${word}-${index}`}
                  className={styles.word}
                  style={{ opacity }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
