"use client";

import { FaSearch, FaUserGraduate, FaFileAlt, FaRocket } from "react-icons/fa";

import BrightBtn from "../../ui/BrightBtn/BrightBtn";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Разбор профиля и потенциала",
      text: "Находим твои сильные стороны и точки роста для поступления в топовые университеты.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Построение стратегии поступления",
      text: "Подбираем страны, университеты и создаём персональную дорожную карту.",
    },
    {
      icon: <FaFileAlt />,
      title: "Упаковка сильной заявки",
      text: "Эссе, достижения и история превращаются в конкурентоспособный профиль кандидата.",
    },
    {
      icon: <FaRocket />,
      title: "Подача и получение офферов",
      text: "Сопровождаем до финальных решений университетов и получения офферов.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Путь к <span>офферу</span> в топ-университет
        </h2>

        <p className={styles.subtitle}>
          Пошаговая система поступления от анализа профиля до финального оффера
        </p>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.dot} />

              <div className={styles.card}>
                <div className={styles.iconBox}>{step.icon}</div>

                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <BrightBtn href="https://wa.me/996504070414">
            Получить персональную стратегию поступления
          </BrightBtn>
        </div>
      </div>
    </section>
  );
}
