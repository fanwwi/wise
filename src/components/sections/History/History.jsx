"use client";
import React from "react";
import styles from "./History.module.css";
import { FaLightbulb, FaUserGraduate, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const History = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.topBanner}>
        <h2 className={styles.bannerTitle}>
          WISE — система полного раскрытия личности кандидата для поступления в
          топ-университеты мира
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
      <h2 className={styles.sectionHeader}>
        Как появились <span>WISE programs</span>?
      </h2>

      <motion.div
        className={styles.storySection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.storyGrid}>
          <motion.div
            className={styles.storyCard}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <FaLightbulb className={styles.icon} />
            <h3>Идея</h3>
            <p>
              Всё началось с простой проблемы — сильные студенты не умеют
              правильно “упаковать” себя для топ-вузов.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaUserGraduate className={styles.icon} />
            <h3>Разработка системы</h3>
            <p>
              Мы начали собирать стратегию поступления как продукт: шаги,
              аналитика, профили, позиционирование.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaRocket className={styles.icon} />
            <h3>Результат</h3>
            <p>
              Сегодня WISE — это система, которая превращает хаос поступления в
              понятный путь к офферу.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default History;
