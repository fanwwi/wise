"use client";
import React from "react";
import styles from "./History.module.css";
import {
  FaSchool,
  FaSearch,
  FaGlobeAmericas,
  FaBrain,
  FaSeedling,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function History() {
  return (
    <section className={styles.heroWrapper} id="history">
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
          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSchool className={styles.icon} />
            <h3>Обычный школьник</h3>
            <p>
              В 17 лет я даже не представлял, что поступление в топовые
              университеты и летние программы мира доступно школьнику из
              Кыргызстана.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSearch className={styles.icon} />
            <h3>Случайная находка</h3>
            <p>
              О зарубежных возможностях я узнал почти случайно. Решил рискнуть,
              подал заявку и прошёл международный отбор.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaGlobeAmericas className={styles.icon} />
            <h3>Другой мир</h3>
            <p>
              Там я встретил ребят из обычных семей. Их отличали не деньги, а
              понимание того, какие возможности существуют.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaBrain className={styles.icon} />
            <h3>Главное осознание</h3>
            <p>
              Разница между теми, кто поступает, и теми, кто даже не пробует,
              часто заключается лишь в информации и стратегии.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSeedling className={styles.icon} />
            <h3>Рождение WISE</h3>
            <p>
              Поэтому появилась WISE — система, которая помогает раскрыть
              потенциал ученика и выстроить путь к лучшим университетам мира.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaGraduationCap className={styles.icon} />
            <h3>Наша цель</h3>
            <p>
              Мы хотим, чтобы талант определял будущее ребёнка, а не страна
              рождения, уровень дохода семьи или отсутствие нужных знакомств.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
