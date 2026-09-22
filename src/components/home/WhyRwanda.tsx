import {
  Handshake,
  Wrench,
  Users,
  ShieldCheck,
  Languages,
  TrendingUp,
} from "lucide-react";
import styles from "./WhyRwanda.module.css";

const POINTS = [
  {
    icon: Handshake,
    title: "40-Year Bilateral Trust",
    description:
      "Decades of direct government-level partnership with Germany, supported by institutions like GIZ and KfW, ensuring long-term institutional reliability.",
  },
  {
    icon: Wrench,
    title: "German-Modeled TVET",
    description:
      "National polytechnics structured in cooperation with German development partners, aligning technical competencies directly with IHK/HWK chamber standards.",
  },
  {
    icon: Users,
    title: "Young, Motivated Talent",
    description:
      "With an average age of 19 and over 60% of the population under 25, ambitious youth are purposefully trained for skilled technical dual trades.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Stability & Safety",
    description:
      "Consistently recognized as a regional benchmark for safety, governance, and digitized public registries, ensuring 100% verified documentation.",
  },
  {
    icon: Languages,
    title: "Multilingual Agility",
    description:
      "English and French fluency provides an accelerated learning baseline to achieve certified Goethe-Institut B2 German prior to arrival.",
  },
  {
    icon: TrendingUp,
    title: "High Retention & Commitment",
    description:
      "Full commitment to the 3-year dual apprenticeship contract with near-zero turnover and a dedicated focus on permanent company careers.",
  },
];

export const WhyRwanda = () => {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="why-rwanda-heading">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.titleColumn}>
            <h2 id="why-rwanda-heading" className={styles.title}>
              Why Rwanda
            </h2>
          </div>

          <div className={styles.contentGrid}>
            {POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className={styles.item}>
                  <div className={styles.itemIconWrapper} aria-hidden="true">
                    <Icon className={styles.itemIcon} strokeWidth={2} />
                  </div>
                  <h3 className={styles.itemTitle}>{point.title}</h3>
                  <p className={styles.itemDescription}>{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
