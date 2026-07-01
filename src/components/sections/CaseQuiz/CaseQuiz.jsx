"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuizStep } from "./QuizStep";
import styles from "./CaseQuiz.module.css";
import { FaLock } from "react-icons/fa";

const steps = [
  {
    question: "В каком ты классе?",
    field: "grade",
    options: ["9-10 класс", "11 класс"],
  },
  {
    question: "Куда хочешь поступать?",
    field: "country",
    options: ["USA", "Canada", "Europe", "Asia"],
  },
  {
    question: "Какая программа?",
    field: "program",
    options: ["Bachelor", "Foundation", "Master"],
  },
  {
    question: "Уровень английского?",
    field: "english",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    question: "Бюджет?",
    field: "budget",
    options: ["$2k-$5k", "$5k-$10k", "$10k+"],
  },
];

const universities = [
  {
    name: "Bellevue College",
    logo: "/images/bellevue.jpg",
  },
  {
    name: "Northeastern University",
    logo: "/images/northeastern.png",
  },
  {
    name: "University of Colorado",
    logo: "/images/colorado.png",
  },
];

export const CaseQuiz = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const current = steps[step];

  const handleNext = () => {
    if (!selected) return;

    setData((p) => ({ ...p, [current.field]: selected }));
    setSelected(null);

    if (step === steps.length - 1) {
      setAnalyzing(true);

      setTimeout(() => {
        setAnalyzing(false);
        setDone(true);
      }, 2400);
    } else {
      setStep((s) => s + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setData({});
    setSelected(null);
    setDone(false);
    setAnalyzing(false);
  };

  return (
    <section className={styles.container} id="quiz">
      <h2 className={styles.title}>
        Бесплатный подбор университета за 60 секунд
      </h2>

      {!done && !analyzing && (
        <div className={styles.progress}>
          Шаг {step + 1} из {steps.length}
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className={styles.quizWrapper}>
        <AnimatePresence mode="wait">
          {!done && !analyzing ? (
            <motion.div
              key={step}
              className={styles.stack}
              initial={{ opacity: 0, x: 60, rotate: 2, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, rotate: -2, scale: 0.94 }}
              transition={{ duration: 0.4 }}
            >
              <QuizStep
                question={current.question}
                options={current.options}
                selected={selected}
                onSelect={setSelected}
              />

              <button
                className={`${styles.nextBtn} ${selected ? styles.active : ""}`}
                onClick={handleNext}
              >
                Далее →
              </button>
            </motion.div>
          ) : analyzing ? (
            <motion.div className={styles.analysis}>
              <div className={styles.loader} />
              <h3>Анализируем профиль...</h3>
              <p>Строим персональную стратегию поступления</p>
            </motion.div>
          ) : (
            <motion.div
              className={styles.result}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className={styles.resultTitle}>
                Твоя стратегия поступления готова 🎯
              </h3>

              <p className={styles.subtitle}>
                Найдено <b>35 университетов</b> под твой профиль
              </p>

              <div className={styles.uniTitle}>Топ-3 университетa</div>

              <div className={styles.universities}>
                {universities.map((u, i) => (
                  <div className={styles.uniCard} key={i}>
                    <FaLock className={styles.lockIcon} />

                    <div className={styles.blurText}>
                      <div className={styles.uniContent}>
                        {/* LOGO ВМЕСТО ФЛАГА */}
                        <img
                          className={styles.logo}
                          src={u.logo}
                          alt={u.name}
                        />

                        <div>
                          <div className={styles.uniName}>{u.name}</div>
                          <div className={styles.uniMeta}>Match 95%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.cta}>
                Получить полный список университетов + разбор профиля БЕСПЛАТНО
              </button>

              <button className={styles.restart} onClick={restart}>
                Начать заново
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
