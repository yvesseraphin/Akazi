import Link from "next/link";
import { HeroActions } from "./HeroActions";
import { HeroProcessSlider } from "./HeroProcessSlider";
import styles from "./Hero.module.css";

interface HeroProps {
  bannerButtonText?: string;
  bannerButtonHref?: string;
  heading?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export const Hero = ({
  bannerButtonText = "Join Webinar",
  bannerButtonHref = "/for-companies",
  heading = (
    <>
      <span className={styles.headingLine}>Bilingual Apprentices from Rwanda for</span>{" "}
      <span className={styles.headingLine}>Companies in Germany</span>
    </>
  ),
  subtitle = (
    <>
      <span>We connect German employers with vetted Rwandan apprentices for dual vocational training,</span>
      <br className={styles.lineBreak} />
      <span>complete with certified B2 German, visa support, and full mentorship.</span>
    </>
  ),
  primaryButtonText = "Book Consultation",
  primaryButtonHref = "/start-hiring",
  secondaryButtonText = "Employer Webinar",
  secondaryButtonHref = "/for-companies",
}: HeroProps) => {
  return (
    <div className={styles.heroWrapper} suppressHydrationWarning>
      <aside className={styles.promoBar} aria-label="Announcement">
        <div className={styles.promoContainer} suppressHydrationWarning>
          <p className={styles.promoText}>
            <span>Learn how language preparation, visa processing,</span>
            <br className={styles.lineBreak} />
            <span>and relocation work.</span>
          </p>
          <Link href={bannerButtonHref} className={styles.promoButton}>
            {bannerButtonText}
          </Link>
        </div>
      </aside>

      <section className={styles.heroTextSection} aria-labelledby="hero-title">
        <div className={styles.heroTextContainer} suppressHydrationWarning>
          <h1 id="hero-title" className={styles.heading}>
            {heading}
          </h1>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
          <HeroActions
            primaryText={primaryButtonText}
            primaryHref={primaryButtonHref}
            secondaryText={secondaryButtonText}
            secondaryHref={secondaryButtonHref}
          />
        </div>
      </section>

      <div className={styles.heroImageSection} suppressHydrationWarning>
        <HeroProcessSlider />
      </div>
    </div>
  );
};
