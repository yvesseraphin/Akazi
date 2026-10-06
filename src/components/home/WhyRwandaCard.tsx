"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./WhyRwanda.module.css";

type WhyRwandaCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  wide?: boolean;
  priority?: boolean;
};

export const WhyRwandaCard = ({
  title,
  description,
  image,
  alt,
  wide = false,
  priority = false,
}: WhyRwandaCardProps) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`${styles.card} ${wide ? styles.wideCard : ""} ${imageFailed ? styles.imageFailed : ""}`}>
      {!imageFailed && (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes={wide ? "(max-width: 768px) 100vw, 1130px" : "(max-width: 768px) 100vw, 553px"}
          className={styles.cardImage}
          onError={() => setImageFailed(true)}
        />
      )}
      <div className={styles.cardShade} aria-hidden="true" />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <svg
          className={styles.cardArrow}
          width="36"
          height="36"
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 15 15 9M9 9h6v6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </article>
  );
};
