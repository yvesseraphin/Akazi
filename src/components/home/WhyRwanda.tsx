import Image from "next/image";
import styles from "./WhyRwanda.module.css";

export const WhyRwanda = () => {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="why-rwanda-heading">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.topBadge}>
            <svg
              className={styles.badgeIcon}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z"
                fill="#ffffff"
              />
            </svg>
            <span className={styles.badgeText}>Services</span>
          </div>
          <h2 id="why-rwanda-heading" className={styles.sectionTitle}>
            Why <span className={styles.rwandaHighlight}>Rwanda</span>?
          </h2>
          <p className={styles.sectionSubtitle}>
            <span className={styles.subtitleLongLine}>
              East Africa's premier hub for bilingual apprentices,
            </span>
            <span className={styles.subtitleShortLine}>
              built for German dual vocational training.
            </span>
          </p>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Young professional in modern collaborative workspace"
              width={553}
              height={501}
              className={styles.rowImage}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Technology and vocational training workshop"
              width={553}
              height={501}
              className={styles.rowImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
