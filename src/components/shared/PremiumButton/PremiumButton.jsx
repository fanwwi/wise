"use client";

import styles from "./PremiumButton.module.css";

export const PremiumButton = () => {
  return (
    <a
      className={styles.button}
      href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20разбор%20моего%20профиля%20сейчас"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.text}>Получить разбор профиля сейчас</span>
      <span className={styles.glow} />
    </a>
  );
};
