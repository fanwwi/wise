"use client";

import { motion } from "framer-motion";
import styles from "./Mission.module.css";

const points = [
  { icon: "🎯", text: "ЦА больше не вне глобального поля конкуренции" },
  { icon: "🌍", text: "СНГ подключается к международному треку поступления" },
  { icon: "⚡", text: "Доступ без элитных входов и “закрытых дверей”" },
];

const Mission = () => {
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
        <div className={styles.badge}>MISSION // WISE SYSTEM</div>

        <h2 className={styles.title}>
          Мы убираем разрыв между <span>талантом</span> и{" "}
          <span>топ-университетами мира</span>
        </h2>

        <p className={styles.text}>
          Поступление слишком долго было закрытой игрой для тех, кто “в теме”.
          <br />
          Мы превращаем его в систему, где у каждого есть маршрут, а не догадки.
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
          Поступление — это не удача. Это архитектура.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mission;
