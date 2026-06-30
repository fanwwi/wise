"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuizStep } from "./QuizStep";
import styles from "./CaseQuiz.module.css";

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
  "Bellevue College",
  "Notheastern university",
  "University of Colorado",
];

export const CaseQuiz = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [done, setDone] = useState(false);

  const nextStep = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));

    if (step === steps.length - 1) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Бесплатный подбор университета</h2>

      <div className={styles.quizWrapper}>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              className={styles.motionCard}
              initial={{ opacity: 0, rotateY: 25, x: 60 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: -25, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <QuizStep
                question={steps[step].question}
                options={steps[step].options}
                field={steps[step].field}
                onNext={nextStep}
              />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              className={styles.result}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              <div className={styles.resultHeader}>
                <h3>Готово!🎉</h3>


                <p className={styles.subtitle}>
                  По твоему профилю подходит <b>35 университетов</b> в
                  направлении <b>США</b>
                </p>
              </div>

              <div className={styles.blockTitle}>Топ-3 варианта для тебя:</div>

              <div className={styles.universities}>
                {universities.map((u, i) => (
                  <div className={styles.uniCard}>
                    <div className={styles.lockOverlay}>
                      <div className={styles.lockIcon}>🔒</div>
                      <span>Открыто после консультации</span>
                    </div>

                    <div className={styles.uniContent}>
                      <span className={styles.uniName}>{u}</span>
                      <span className={styles.uniMeta}>Совпадение 95%</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.cta}>
                Получить полный список + бесплатный разбор кейса 
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
