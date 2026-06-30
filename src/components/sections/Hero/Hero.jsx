"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { PremiumButton } from "@/components/shared/PremiumButton/PremiumButton";

export const Hero = () => {
  return (
    <section className={styles.hero}>
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
          Поступи в университет <br />
          <span className={styles.accent}>который подходит именно тебе</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.subtitle}
        >
          Помогаем выстроить стратегию поступления в зарубежные университеты —
          от идеи до оффера и гранта.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.ctaWrapper}
        >
          <PremiumButton text="Получить разбор профиля сейчас" />
        </motion.div>
      </div>
    </section>
  );
};
