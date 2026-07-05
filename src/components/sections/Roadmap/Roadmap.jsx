"use client";

import { FaSearch, FaUserGraduate, FaFileAlt, FaRocket } from "react-icons/fa";
import BrightBtn from "../../ui/BrightBtn/BrightBtn";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Разбор профиля и потенциала",
      text: "Находим твои сильные стороны и точки роста для топ-вузов",
    },
    {
      icon: <FaUserGraduate />,
      title: "Построение стратегии поступления",
      text: "Формируем маршрут: страна, университет, шансы и план действий",
    },
    {
      icon: <FaFileAlt />,
      title: "Сбор и упаковка заявки",
      text: "Эссе, достижения и история — превращаем в сильный сильный конкурентоспособный профиль",
    },
    {
      icon: <FaRocket />,
      title: "Подача и результат",
      text: "Сопровождаем до офферов и финального решения университетов",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Путь к <span>офферу</span> в топ-университет
        </h2>

        <p className={styles.subtitle}>
          Чёткая система поступления без хаоса — от анализа до оффера
        </p>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.iconBox}>{s.icon}</div>

              <div className={styles.content}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>

              {i !== steps.length - 1 && <div className={styles.line} />}
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
