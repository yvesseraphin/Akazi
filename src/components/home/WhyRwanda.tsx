import { WhyRwandaCard } from "./WhyRwandaCard";
import styles from "./WhyRwanda.module.css";

const reasons = [
  {
    title: "A young, motivated generation",
    description:
      "Around 60% of Rwanda's population is under 25. Many young people are eager to build practical skills and a lasting career.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Young professional in a modern collaborative workspace",
  },
  {
    title: "Training is a conscious choice",
    description:
      "Candidates commit to a clear path: prepare, learn a trade, and build their professional future through vocational training.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    alt: "Colleagues working together in a training environment",
  },
  {
    title: "Ready to learn and contribute",
    description:
      "Strong learning habits and a multilingual education give candidates a foundation for intensive German language and vocational training.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    alt: "A diverse team sharing ideas around a table",
  },
  {
    title: "A practical, team-minded outlook",
    description:
      "Akazi selects for reliability, discipline, teamwork, and respect for the everyday expectations of a German training workplace.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    alt: "A professional working with equipment in a workshop",
  },
  {
    title: "A stable bridge between two countries",
    description:
      "With preparation in Rwanda and personal support in Germany, apprentices and employers can build a respectful partnership over time.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
    alt: "Students learning together outdoors",
    wide: true,
  },
];

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
              East Africa&apos;s premier hub for bilingual apprentices,
            </span>
            <span className={styles.subtitleShortLine}>
              built for German dual vocational training.
            </span>
          </p>
        </div>

        <div className={styles.cardGrid}>
          {reasons.map((reason, index) => (
            <WhyRwandaCard
              key={reason.title}
              title={reason.title}
              description={reason.description}
              image={reason.image}
              alt={reason.alt}
              wide={reason.wide}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
