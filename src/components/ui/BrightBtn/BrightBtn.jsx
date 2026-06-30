"use client";

import styles from "./BrightBtn.module.css";

export default function BrightBtn({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{children}</span>
      <span className={styles.shine} />
    </button>
  );
}
