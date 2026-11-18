import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroActionsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export const HeroActions = ({
  primaryText = "Book Consultation",
  primaryHref = "#consultation",
  secondaryText = "Employer Webinar",
  secondaryHref = "#webinar",
}: HeroActionsProps) => {
  return (
    <div className={styles.actionsContainer} suppressHydrationWarning>
      <Link href={primaryHref} className={styles.primaryButton}>
        {primaryText}
      </Link>
      <Link href={secondaryHref} className={styles.secondaryButton}>
        {secondaryText}
      </Link>
    </div>
  );
};
