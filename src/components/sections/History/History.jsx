"use client";

import React from "react";
import styles from "./History.module.css";

import {
  FaSchool,
  FaSearch,
  FaGlobeAmericas,
  FaBrain,
  FaSeedling,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

export default function History() {
  const cards = [
    {
      icon: <FaSchool />,
      title: "Обычный школьник из Кыргызстана",
      text: "В 17 лет я не представлял, что мировые университеты и международные программы могут быть реальной целью для ученика из обычной школы.",
    },
    {
      icon: <FaSearch />,
      title: "Возможность, о которой никто не говорил",
      text: "Летние программы Yale, топовые университеты и глобальные стипендии казались чем-то недоступным, пока я случайно не узнал о них.",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Первый шаг в большой мир",
      text: "Я подал заявку, прошёл отбор и увидел, что среди участников были такие же ребята из обычных семей и городов.",
    },
    {
      icon: <FaBrain />,
      title: "Главное открытие",
      text: "Разница была не в деньгах или происхождении. Они просто знали, какие возможности существуют и как к ним прийти.",
    },
    {
      icon: <FaLightbulb />,
      title: "Появление WISE",
      text: "Я понял: талантливым ученикам часто не хватает не способностей, а информации, стратегии и правильного направления.",
    },
    {
      icon: <FaSeedling />,
      title: "Мы раскрываем потенциал",
      text: "WISE помогает ученикам построить сильную историю, показать свои возможности и конкурировать с лучшими кандидатами мира.",
    },
    {
      icon: <FaRocket />,
      title: "Система на реальном опыте",
      text: "Мы объединяем стратегию поступления, профиль, эссе и подготовку документов в понятный путь к университетам.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Проверено основателями",
      text: "Основатели WISE сами поступили в ведущие университеты США и сейчас обучаются на 100% грантовом финансировании.",
    },
  ];

  return (
    <section className={styles.heroWrapper} id="history">
      <div className={styles.topBanner}>
        <h2 className={styles.bannerTitle}>
          WISE — система полного раскрытия личности кандидата для поступления в
          топ-университеты мира
        </h2>

        <div className={styles.wave}>
          <div className={styles.waveTrack}>
            <svg viewBox="0 0 1440 120">
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
            </svg>

            <svg viewBox="0 0 1440 120">
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeader}>
        Как появились <span>WISE programs</span>?
      </h2>

      <div className={styles.storySection}>
        <div className={styles.storyGrid}>
          {cards.map((card, index) => (
            <div className={styles.storyCard} key={index}>
              <div className={styles.icon}>{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
