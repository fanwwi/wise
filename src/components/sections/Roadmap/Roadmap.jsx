"use client";

import styles from "./Roadmap.module.css";
import BlueButton from "../../ui/BrightBtn/BrightBtn"

export default function Roadmap() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как проходит поступление</h2>

        <div className={styles.imageWrapper}>
          <img
            src="/images/roadmap.png"
            alt="Roadmap"
            className={styles.image}
          />
        </div>

        <BlueButton>Начать с бесплатной консультации</BlueButton>
      </div>
    </section>
  );
}
