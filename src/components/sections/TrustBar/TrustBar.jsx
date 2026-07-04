"use client";

import { motion } from "framer-motion";
import styles from "./TrustBar.module.css";

export const TrustBar = () => {
  const stats = [
    { value: "1000", suffix: "+", label: "студентов уже поступили с нами" },
    { value: "5.5", suffix: "M+", label: "общая сумма полученных грантов" },
    { value: "7", suffix: "+", label: "стран, куда ты 100% поступишь" },
    { value: "10", suffix: "+", label: "направлений подготовки" },
    { value: "3", suffix: "+", label: "года опыта в сфере образования" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Строй своё будущее <span className={styles.accent}>вместе с нами</span>
        </motion.h2>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.numberWrap}>
                <span className={styles.number}>{s.value}</span>
                <span className={styles.plus}>{s.suffix}</span>
              </div>

              <div className={styles.label}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
