import Link from "next/link";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer} suppressHydrationWarning>
        <nav aria-label="Main Navigation" className={styles.centerNav}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/for-companies" className={styles.navLink}>
                For Companies
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/industries" className={styles.navLink}>
                Industries
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <NavDropdown
                label="Resources"
                heading="Services"
                items={[
                  {
                    title: "Webinar",
                    href: "/webinar",
                  },
                ]}
              />
            </li>
          </ul>
        </nav>

        <div className={styles.rightActions} suppressHydrationWarning>
          <Link href="/start-hiring" className={styles.primaryNavBtn}>
            Book Call
          </Link>
          <Link href="/for-companies" className={styles.secondaryNavBtn}>
            Webinar
          </Link>
        </div>
      </div>
    </header>
  );
};
