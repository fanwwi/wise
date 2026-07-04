"use client";

import { motion } from "framer-motion";
import styles from "./Whyus.module.css";
import Image from "next/image";

const Whyus = () => {
  return (
    <section className={styles.section} id="about">
      {/* HERO BANNER */}
      <div className={styles.heroWrapper}>
        <div className={styles.topBanner}>
          <h2 className={styles.bannerTitle}>
            WISE — система полного раскрытия личности кандидата для поступления в
            топ-университеты мира
          </h2>

          {/* double wave */}
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
        {/* LEFT */}
        <div className={styles.left}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Мы формируем кандидата уровня, которого выбирают
            <span className={styles.accent}> топ-университеты.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.text}
          >
            <br />
            Позиционирование. Эссе. Логика истории. Путь.
            <br />
            <br />
            Мы анализируем не только достижения, но и мышление, траекторию
            развития и личную историю студента, формируя целостный академический
            профиль.
          </motion.p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={styles.right}
        >
          <Image
            src="/images/team.png"
            alt="WISE team"
            fill
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;
