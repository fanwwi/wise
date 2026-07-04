"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { PremiumButton } from "@/components/shared/PremiumButton/PremiumButton";

export const Hero = () => {
  return (
    <section className={styles.hero} id="main">
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />
      <div className={styles.grid} />
      <div className={styles.noise} />

      <div className={styles.content}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.badge}
        >
          Поступи в США • Европу • Азию
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.title}
        >
          Покажем университету
          <br />
          <span className={styles.accent}>настоящего тебя</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.subtitle}
        >
          В WISE мы помогаем школьникам из Кыргызстана, Казахстана и стран СНГ
          найти университет, который соответствует их целям, раскрыть свой
          потенциал и создать заявку, которую действительно замечают приёмные
          комиссии.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.ctaWrapper}
        >
          <PremiumButton text="Получить разбор профиля сейчас" />
        </motion.div>

        <div className={styles.statsDivider} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={styles.stats}
        >
          <div className={styles.statItem}>
            <div className={styles.statNumber}>25 000+</div>
            <div className={styles.statText}>слов сильного эссе и заявок</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>55+ часов</div>
            <div className={styles.statText}>стратегической работы</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>19 часов</div>
            <div className={styles.statText}>1-на-1 с экспертом</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statText}>поступивших студентов</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
