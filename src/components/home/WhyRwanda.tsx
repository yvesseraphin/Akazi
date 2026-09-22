import styles from "./WhyRwanda.module.css";

export const WhyRwanda = () => {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="why-rwanda-heading">
      <div className={styles.container}>
        <h2 id="why-rwanda-heading" className={styles.sectionTitle}>
          Why Rwanda
        </h2>
      </div>
    </section>
  );
};
