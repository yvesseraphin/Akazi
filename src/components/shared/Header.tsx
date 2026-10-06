"use client";

import { useState } from "react";
import Link from "next/link";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer} suppressHydrationWarning>
        <nav
          id="site-navigation"
          aria-label="Main Navigation"
          className={`${styles.centerNav} ${isMobileMenuOpen ? styles.centerNavOpen : ""}`}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
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
          <div className={styles.mobilePanelActions}>
            <Link href="/start-hiring" className={styles.mobilePanelPrimary}>
              Book Call
            </Link>
            <Link href="/for-companies" className={styles.mobilePanelSecondary}>
              Webinar
            </Link>
          </div>
        </nav>

        <div className={styles.rightActions} suppressHydrationWarning>
          <Link href="/start-hiring" className={styles.primaryNavBtn}>
            Book Call
          </Link>
          <Link href="/for-companies" className={styles.secondaryNavBtn}>
            Webinar
          </Link>
          <button
            type="button"
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.mobileMenuButtonOpen : ""}`}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
