"use client";

import { motion } from "framer-motion";
import styles from "./Mission.module.css";

const points = [
  {
    icon: "🌏",
    text: "Открываем доступ к мировому образованию для школьников Центральной Азии и СНГ.",
  },
  {
    icon: "🧭",
    text: "Показываем понятный путь туда, где раньше казалось «не для нас».",
  },
  {
    icon: "⚖️",
    text: "Талант и упорство должны определять будущее, а не место рождения или доход семьи.",
  },
];

export default function Mission() {
  return (
    <section className={styles.wrapper} id="mission">
      {/* ambient glow */}
      <motion.div
        className={styles.glow}
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.badge}>OUR MISSION</div>

        <h2 className={styles.title}>
          Сократить <span>образовательное неравенство</span> в Центральной Азии
        </h2>

        <p className={styles.text}>
          Мы хотим, чтобы каждый умный и мотивированный ребёнок имел доступ к
          мировому образованию независимо от того, где он родился и от его
          жизненных обстоятельств.
        </p>

        <div className={styles.points}>
          {points.map((p, i) => (
            <motion.div
              key={i}
              className={styles.point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ x: 6 }}
            >
              <span>{p.icon}</span> {p.text}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.footerLine}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
        >
          Успех человека не должен зависеть от его обстоятельств.
        </motion.div>
      </motion.div>
    </section>
  );
}
