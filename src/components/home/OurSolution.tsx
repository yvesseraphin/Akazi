import Link from "next/link";
import styles from "./OurSolution.module.css";

const solutions = [
  {
    category: "Talent",
    title: "Vetted apprentices matched to your needs",
    number: "01",
    description: "Meet motivated candidates selected for your Ausbildung roles.",
  },
  {
    category: "Preparation",
    title: "German language and visa support",
    number: "02",
    description: "Candidates prepare in Rwanda and work toward certified B2 German.",
  },
  {
    category: "Partnership",
    title: "Support from arrival through training",
    number: "03",
    description: "Ongoing mentorship helps apprentices settle in and stay on track.",
  },
];

const servicePillars = [
  "VETTED CANDIDATES",
  "B2 GERMAN PREPARATION",
  "VISA COORDINATION",
  "EMPLOYER MATCHING",
  "ARRIVAL & INTEGRATION",
  "ONGOING MENTORSHIP",
];

export const OurSolution = () => {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="our-solution-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
        <div className={styles.copy}>
          <h2 id="our-solution-heading" className={styles.sectionTitle}>
              Your partner for skilled apprentice
              <br />
              recruitment
          </h2>
          <p className={styles.sectionSubtitle}>
              Akazi Germany supports employers from candidate selection and B2 German preparation through visa coordination, arrival, and ongoing mentorship.
          </p>
        </div>
        <Link href="/about" className={styles.exploreButton}>
          <span>Learn more</span>
          <span className={styles.buttonArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
        </div>
        <div className={styles.cardGrid}>
          {solutions.map((solution) => (
            <article className={styles.card} key={solution.number}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{solution.category}</span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M5 35 35 5M7 5h28v28" />
                  </svg>
                </span>
              </div>
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <div className={styles.cardBottom}>
                <span className={styles.cardNumber}>{solution.number}</span>
                <p className={styles.cardDescription}>{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
        <section className={styles.ticker} aria-label="Akazi Germany service pillars">
          <p className={styles.visuallyHidden}>
            Our service pillars: {servicePillars.join(", ")}.
          </p>
          <div className={styles.tickerViewport} aria-hidden="true">
            <div className={styles.tickerTrack}>
              {[0, 1].map((copy) => (
                <div className={styles.tickerGroup} key={copy}>
                  {servicePillars.map((pillar) => (
                    <span className={styles.tickerItem} key={pillar}>
                      <span>{pillar}</span>
                      <span className={styles.tickerDot} />
                      <span className={styles.tickerSlash}>/</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
