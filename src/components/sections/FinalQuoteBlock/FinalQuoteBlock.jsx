"use client";

import { motion } from "framer-motion";
import styles from "./FinalQuoteBlock.module.css";

export default function FinalQuoteBlock() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* aggressive background layers */}
      <div className={styles.flash1} />
      <div className={styles.flash2} />
      <div className={styles.gridGlow} />

      {/* CARD */}
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
      >
        {/* pulse ring */}
        <motion.div
          className={styles.pulseRing}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className={styles.badge}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⚡ ТВОЙ СЛЕДУЮЩИЙ ШАГ
        </motion.div>

        <h2 className={styles.title}>Не откладывай поступление ещё на год</h2>

        <p className={styles.text}>
          Мы не просто покажем университеты — мы соберём тебе стратегию
          поступления, которая реально работает.
          <br />
          Ты либо начинаешь сейчас, либо теряешь время.
        </p>

        <motion.a
          className={styles.cta}
          href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20получить%20бесплатный%20разбор%20профиля%20сейчас"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
        >
          Получить бесплатный разбор сейчас
        </motion.a>

        <div className={styles.micro}>⏳ Начни уже сегодня - вместе с WISE</div>
      </motion.div>
    </motion.section>
  );
}
