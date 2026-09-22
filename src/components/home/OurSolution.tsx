import styles from "./OurSolution.module.css";

export const OurSolution = () => {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="our-solution-heading">
      <div className={styles.container}>
        <h2 id="our-solution-heading" className={styles.sectionTitle}>
          Our Solution
        </h2>
      </div>
    </section>
  );
};
