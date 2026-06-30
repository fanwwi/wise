"use client";

import styles from "./Value.module.css";
import {
  FaUserCheck,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

const Value = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Поступление в топ университет — это стратегия, а не документы
        </h2>

        <p className={styles.subtitle}>
          Мы не оформляем заявки — мы выстраиваем профиль, который выделяет вас
          среди тысяч кандидатов.
        </p>

        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              <FaUserCheck className={styles.icon} />
              <h3>Видим человека за заявкой</h3>
            </div>
            <p>
              Анализируем опыт и достижения так, чтобы приёмная
              комиссия увидела не бумагу, а личность с потенциалом.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.headerRow}>
              <FaMapMarkedAlt className={styles.icon} />
              <h3>Индивидуальная стратегия</h3>
            </div>
            <p>
              Подбираем страну, университет и план поступления под ваши цели, а
              не под шаблонные сценарии.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.headerRow}>
              <FaHandsHelping className={styles.icon} />
              <h3>Полное сопровождение</h3>
            </div>
            <p>
              Ведём от первой консультации до оффера, закрывая все этапы
              поступления без хаоса и потерь.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.headerRow}>
              <FaGlobe className={styles.icon} />
              <h3>Международная экспертиза</h3>
            </div>
            <p>
              Понимаем требования разных стран и адаптируем стратегию под
              реальные критерии университетов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
