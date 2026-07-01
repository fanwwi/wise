"use client";

import { motion } from "framer-motion";
import { FaBrain, FaSearch, FaUniversity, FaChartLine } from "react-icons/fa";
import styles from "./Analyzing.module.css";

export default function Analyzing() {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
    >
      {/* ICON */}
      <motion.div
        className={styles.icon}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <FaBrain />
      </motion.div>

      {/* TITLE */}
      <h2 className={styles.title}>Анализируем твой профиль</h2>

      <p className={styles.subtitle}>
        ИИ подбирает университеты, где у тебя максимальный шанс поступления
      </p>

      {/* STEPS */}
      <div className={styles.steps}>
        <div className={styles.step}>
          <FaSearch />
          <span>Анализ данных анкеты</span>
        </div>

        <div className={styles.step}>
          <FaUniversity />
          <span>Поиск подходящих университетов</span>
        </div>

        <div className={styles.step}>
          <FaChartLine />
          <span>Расчет вероятности поступления</span>
        </div>
      </div>

      {/* LOADER */}
      <div className={styles.loader}>
        <motion.div
          className={styles.bar}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        />
      </div>

      <p className={styles.footer}>Подождите несколько секунд...</p>
    </motion.div>
  );
}
