"use client";

import { motion } from "framer-motion";
import styles from "./FinalQuoteBlock.module.css";

export default function FinalQuoteBlock() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0, y: 90, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ENERGY BACKGROUND */}
      <motion.div
        className={styles.energy1}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className={styles.energy2}
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className={styles.energy3}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* CARD */}
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.03, rotateX: 6, rotateY: -6 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* neon top line */}
        <motion.div
          className={styles.topGlow}
          animate={{
            opacity: [0.4, 1, 0.4],
            scaleX: [0.7, 1.2, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* quote */}
        <motion.div
          className={styles.quote}
          animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          “
        </motion.div>

        <h2 className={styles.title}>Не знаешь, с чего начать?</h2>

        <p className={styles.text}>
          Даже если сейчас всё кажется хаосом — это нормально.
          <br />
          Мы разберём твою ситуацию и соберём чёткий план поступления: страна,
          университет и стратегия.
        </p>

        <motion.button
          className={styles.cta}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{ scale: 0.96 }}
        >
          Получить бесплатную консультацию
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
