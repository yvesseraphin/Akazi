"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./NavDropdown.module.css";

export interface DropdownItem {
  title: string;
  href: string;
}

export interface NavDropdownProps {
  label: string;
  heading?: string;
  items: DropdownItem[];
}

export const NavDropdown = ({
  label,
  heading,
  items,
}: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdownContainer}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={styles.triggerBtn}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={styles.menuFlyout}
          role="menu"
          aria-label={`${label} dropdown`}
        >
          {heading && (
            <div className={styles.headingTitle}>{heading}</div>
          )}
          <div className={styles.itemsList}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.dropdownItem}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
