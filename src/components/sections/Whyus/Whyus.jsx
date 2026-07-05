"use client";

import { motion } from "framer-motion";
import styles from "./Whyus.module.css";
import Image from "next/image";

const Whyus = () => {
  return (
    <section className={styles.section} id="about">
      {/* HERO */}
      <div className={styles.heroWrapper}>
        <div className={styles.topBanner}>
          <h2 className={styles.bannerTitle}>
            WISE — система полного раскрытия личности кандидата для поступления
            в топ-университеты мира
          </h2>

          <div className={styles.wave}>
            <div className={styles.waveTrack}>
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
              </svg>
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        {/* LEFT TEXT */}
        <div className={styles.left}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Мы формируем кандидата уровня, которого выбирают{" "}
            <span className={styles.accent}>топ-университеты.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.text}
          >
            Позиционирование. Эссе. Логика истории. Путь.
            <br />
            <br />
            Мы анализируем не только достижения, но и мышление, траекторию
            развития и личную историю студента.
          </motion.p>
        </div>

        {/* RIGHT COLLAGE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className={styles.singleImage}>
            <Image src="/images/image.jpg" alt="Campus collage" fill priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;
