"use client";

import styles from "./Compare.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Compare() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Разница, которая реально влияет на оффер</h2>

      <div className={styles.wrapper}>
        {/* WITHOUT WISE */}
        <div className={`${styles.card} ${styles.bad}`}>
          <div className={styles.label}>Без стратегии</div>

          <h3 className={styles.cardTitle}>Обычная подача</h3>

          <ul className={styles.list}>
            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Делаешь всё “наугад” — оценки, курсы, активности без системы
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Подаёшься как все: одинаковые тексты, одинаковые заявки
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Твоя история теряется среди других кандидатов
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Не понимаешь, что реально важно для поступления
            </li>

            <li className={styles.item}>
              <FaTimesCircle className={styles.iconBad} />
              Нет стратегии — просто набор действий без результата
            </li>
          </ul>
        </div>

        {/* WITH WISE */}
        <div className={`${styles.card} ${styles.good}`}>
          <div className={styles.glowRing}></div>

          <div className={styles.label}>WISE ADMISSION SYSTEM</div>

          <h3 className={styles.cardTitle}>Стратегическая подача</h3>

          <ul className={styles.list}>
            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Помогаем понять, в чём ты реально силён, а не “в чём вроде норм”
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Собираем твою личную историю, а не просто список оценок и курсов
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Показываем университетам, кто ты есть на самом деле, а не только
              баллы
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Строим чёткий план поступления под твою цель, а не “куда
              получится”
            </li>

            <li className={styles.item}>
              <FaCheckCircle className={styles.iconGood} />
              Упаковываем профиль так, чтобы ты выделялся среди тысяч заявок
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
