"use client";

import styles from "./PremiumButton.module.css";

export const PremiumButton = ({ text }) => {
  return (
    <button className={styles.button}>
      <span className={styles.text}>{text}</span>
      <span className={styles.glow} />
    </button>
  );
};
