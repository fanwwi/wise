"use client";

import React from "react";
import styles from "./History.module.css";

import {
  FaCompass,
  FaGlobe,
  FaLightbulb,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

export default function History() {
  const steps = [
    {
      number: "01",
      icon: <FaCompass />,
      title: "Начало пути",
      text: "Когда мне было 17 лет, я не знал, что ученики из обычных школ Кыргызстана могут поступать в мировые университеты.",
    },
    {
      number: "02",
      icon: <FaGlobe />,
      title: "Открытие возможностей",
      text: "Я случайно узнал о международных программах, грантах и понял: проблема была не в отсутствии таланта, а в отсутствии информации.",
    },
    {
      number: "03",
      icon: <FaLightbulb />,
      title: "Главное понимание",
      text: "Ребята из разных стран были такими же, как я. Их отличало только одно — они знали, куда идти и как построить путь.",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Создание WISE",
      text: "Так появилась система, которая помогает талантливым ученикам раскрыть себя и стать сильными кандидатами.",
    },
  ];

  return (
    <section className={styles.section} id="history">
      <div className={styles.topBanner}>
        {" "}
        <h2 className={styles.bannerTitle}>
          {" "}
          WISE — система полного раскрытия личности кандидата для поступления в
          топ-университеты мира{" "}
        </h2>{" "}
        <div className={styles.wave}>
          {" "}
          <div className={styles.waveTrack}>
            {" "}
            <svg viewBox="0 0 1440 120">
              {" "}
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />{" "}
            </svg>{" "}
            <svg viewBox="0 0 1440 120">
              {" "}
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />{" "}
            </svg>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className={styles.header}>
        <h2>
          История создания
          <span> WISE Programs</span>
        </h2>
      </div>

      <div className={styles.intro}>
        <div className={styles.quote}>
          <span>“</span>

          <p>
            Будущее ученика должно определяться его потенциалом, трудолюбием и
            амбициями, а не обстоятельствами, в которых он родился.
          </p>
        </div>

        <div className={styles.description}>
          <p>
            WISE появился не из идеи создать очередной образовательный проект.
          </p>

          <p>
            Он появился из личного опыта — когда ты обладаешь потенциалом, но не
            знаешь о возможностях вокруг.
          </p>
        </div>
      </div>

      <div className={styles.journey}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <div className={styles.number}>{step.number}</div>

            <div className={styles.text}>
              <div className={styles.titleblock}>
                <div className={styles.icon}>{step.icon}</div>
                <h3 className={styles.titleh3}>{step.title}</h3>
              </div>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.founder}>
        <div className={styles.photoWrapper}>
          <div className={styles.glow}></div>

          <img src="/images/yrys.jpg" alt="WISE founder" />
        </div>

        <div className={styles.founderInfo}>
          <div className={styles.label}>FOUNDERS STORY</div>

          <h3>Мы сами прошли этот путь</h3>

          <p>
            Основатели WISE лично прошли международные отборы, поступление и
            путь к грантовому обучению в США.
          </p>

          <p>
            Сегодня мы учимся в ведущих университетах на{" "}
            <strong>100% грантах</strong> и создаём систему, которой самим не
            хватало в школе.
          </p>

          <div className={styles.grant}>
            <FaGraduationCap />
            100% финансирование обучения в США
          </div>
        </div>
      </div>
    </section>
  );
}
