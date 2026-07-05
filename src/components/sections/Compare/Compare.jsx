"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styles from "./Compare.module.css";

export default function Compare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Разница, которая реально влияет на{" "}
        <span className={styles.accent}>оффер</span>
      </h2>

      <div className={styles.wrapper}>
        {/* BAD */}
        <div className={`${styles.card} ${styles.bad}`}>
          <div className={styles.label}>Без стратегии</div>
          <h3 className={styles.cardTitle}>Обычная подача</h3>

          <div className={styles.statsRow}>
            <div className={styles.miniStat}>
              <span>0</span>
              <p>структуры</p>
            </div>
            <div className={styles.miniStat}>
              <span>1</span>
              <p>шаблон</p>
            </div>
            <div className={styles.miniStat}>
              <span>↓</span>
              <p>низкий шанс</p>
            </div>
          </div>

          <ul className={styles.list}>
            <li>
              <FaTimesCircle /> Всё делается без системы
            </li>
            <li>
              <FaTimesCircle /> Одинаковые заявки
            </li>
            <li>
              <FaTimesCircle /> Слабая персонализация
            </li>
            <li>
              <FaTimesCircle /> Нет стратегии
            </li>
          </ul>
        </div>

        {/* GOOD */}
        <div className={`${styles.card} ${styles.good}`}>
          <div className={styles.glowRing} />

          <div className={styles.label}>WISE SYSTEM</div>
          <h3 className={styles.cardTitle}>Стратегическая подача</h3>

          <div className={styles.statsRow}>
            <div className={styles.miniStat}>
              <span>87%</span>
              <p>accept rate boost</p>
            </div>
            <div className={styles.miniStat}>
              <span>25K+</span>
              <p>слов эссе</p>
            </div>
            <div className={styles.miniStat}>
              <span>1:1</span>
              <p>менторинг</p>
            </div>
          </div>

          <ul className={styles.list}>
            <li>
              <FaCheckCircle /> Стратегия под топ-вузы
            </li>
            <li>
              <FaCheckCircle /> Личная история кандидата
            </li>
            <li>
              <FaCheckCircle /> Сильное позиционирование
            </li>
            <li>
              <FaCheckCircle /> Выделение среди тысяч заявок
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
