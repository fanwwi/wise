"use client";

import styles from "./BrightBtn.module.css";

export default function BrightBtn({ children, href }) {
  return (
    <a
      className={styles.button}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.shine} />
    </a>
  );
}
