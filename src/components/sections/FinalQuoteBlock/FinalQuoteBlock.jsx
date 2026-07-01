"use client";

import { motion } from "framer-motion";
import styles from "./FinalQuoteBlock.module.css";

export default function FinalQuoteBlock() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* aggressive background layers */}
      <div className={styles.flash1} />
      <div className={styles.flash2} />
      <div className={styles.gridGlow} />

      {/* CARD */}
      <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
        {/* pulse ring */}
        <motion.div
          className={styles.pulseRing}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
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

        <motion.button
          className={styles.cta}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
        >
          Получить бесплатный разбор сейчас
        </motion.button>

        <div className={styles.micro}>
          ⏳ Начни уже сегодня - вместе с WISE
        </div>
      </motion.div>
    </motion.section>
  );
}
