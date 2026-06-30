"use client";

import styles from "./Compare.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Compare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Почему WISE меняет результат поступления</h2>

      <div className={styles.wrapper}>
        {/* WISE */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Поступать с WISE</h3>

          <ul className={styles.list}>
            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Помогаем определить твои сильные стороны, интересы и реальный
              потенциал
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Формируем твою уникальную историю для университетов, а не просто
              список достижений
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Показываем приёмной комиссии, кто ты как личность, а не только как
              “оценки и тесты”
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Собираем стратегию поступления вокруг твоих целей, характера и
              амбиций
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Упаковываем твой профиль так, чтобы он выделялся среди тысяч
              кандидатов
            </li>
          </ul>
        </div>

        {/* WITHOUT WISE */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Поступать без WISE</h3>

          <ul className={styles.list}>
            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Фокус только на оценках без понимания личности
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Подача “как у всех” без уникального позиционирования
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Слабая история кандидата для комиссии
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Потеря сильных сторон в процессе подачи
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Отсутствие стратегии, которая ведёт к офферу
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Сильные стороны кандидата не раскрываются в заявке и остаются
              “невидимыми” для комиссии
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
