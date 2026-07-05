"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import styles from "./CaseQuiz.module.css";

const steps = [
  {
    question: "В каком ты классе?",
    field: "grade",
    options: ["9 класс", "10 класс", "11 класс"],
  },
  {
    question: "Куда хочешь поступать?",
    field: "country",
    options: ["USA", "Canada", "Europe", "Asia"],
  },
  {
    question: "Какая программа?",
    field: "program",
    options: ["Бакалавр", "Магистратура", "PhD"],
  },
  {
    question: "Уровень английского?",
    field: "english",
    options: ["Beginner(A1-A2)", "Intermediate(B1-B2)", "Advanced(C1-C2)"],
  },
  {
    question: "Бюджет?",
    field: "budget",
    options: ["$2k-$5k", "$5k-$10k", "$10k+"],
  },
];

const universities = [
  { name: "Bellevue College" },
  { name: "Northeastern University" },
  { name: "University of Colorado" },
];

export default function CaseQuiz () {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const current = steps[step];

  const handleSelect = (opt) => {
    setSelected(opt);

    // 🚀 авто-переход — UX как в квизах уровня startup funnel
    setTimeout(() => {
      const nextData = { ...data, [current.field]: opt };
      setData(nextData);
      setSelected(null);

      if (step === steps.length - 1) {
        setAnalyzing(true);

        setTimeout(() => {
          setAnalyzing(false);
          setDone(true);
        }, 1200);
      } else {
        setStep((s) => s + 1);
      }
    }, 150);
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
      <h2 className={styles.title}>Подбор университета за 60 секунд</h2>

      {/* PROGRESS */}
      {!done && !analyzing && (
        <div className={styles.progress}>
          Шаг {step + 1} / {steps.length}
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
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
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {/* QUESTION CARD */}
              <div className={styles.stepCard}>
                <h3 className={styles.question}>{current.question}</h3>

                <div className={styles.options}>
                  {current.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelect(opt)}
                      className={`${styles.option} ${
                        selected === opt ? styles.activeOption : ""
                      }`}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* MICRO PROGRESS TEXT */}
              <div className={styles.hint}>
                Выбери один вариант — дальше система всё сделает сама ⚡
              </div>
            </motion.div>
          ) : analyzing ? (
            <motion.div
              className={styles.analysis}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.loader} />
              <h3>Анализируем твой профиль...</h3>
              <p>Подбираем университеты и стратегию</p>
            </motion.div>
          ) : (
            <motion.div
              className={styles.result}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={styles.heroResult}>
                <h3 className={styles.resultTitle}>
                  Твоя стратегия поступления готова
                </h3>
              </div>

              <div className={styles.uniTitle}>
                Топ-3 варианта, которые реально подходят тебе
              </div>

              <div className={styles.universities}>
                {universities.map((u, i) => (
                  <div className={styles.uniCard} key={i}>
                    <FaLock className={styles.lockIcon} />

                    <div className={styles.blurText}>
                      <div className={styles.uniContent}>
                        <div>
                          <div className={styles.uniName}>{u.name}</div>
                          <div className={styles.uniMeta}>
                            Match 95% · подходит под твой профиль
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                className={styles.cta}
                href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20получить%20полный%20список%20университетов%20и%20стратегию%20поступления"
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить полный список + стратегию поступления
              </a>

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
