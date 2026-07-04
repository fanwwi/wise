"use client";

import {
  FaUserCheck,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import styles from "./Value.module.css";

const items = [
  {
    icon: <FaUserCheck />,
    title: "Видим человека за заявкой",
    text: "Разбираем достижения так, чтобы университет увидел не список, а сильного кандидата с потенциалом.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Индивидуальная стратегия",
    text: "Подбираем страну, вуз и план поступления под твои цели, а не под шаблоны.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Полное сопровождение",
    text: "Ведём от идеи до оффера, закрывая все этапы поступления без хаоса.",
  },
  {
    icon: <FaGlobe />,
    title: "Международная экспертиза",
    text: "Адаптируем стратегию под реальные требования университетов разных стран.",
  },
];

export default function Value() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Поступление в топ-вузы — это <span>стратегия</span>, а не документы
        </h2>

        <p className={styles.subtitle}>
          Мы выстраиваем не заявку, а позиционирование кандидата, которое
          выделяет среди тысяч других.
        </p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
