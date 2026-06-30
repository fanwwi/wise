"use client";
import { useState } from "react";
import { QuizStep } from "./QuizStep";
import styles from "./CaseQuiz.module.css";

export const CaseQuiz = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const nextStep = (field, value) => {
    setData({ ...data, [field]: value });
    setStep(step + 1);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Найдите свое будущее</h2>
      <div className={styles.quizWrapper}>
        {step === 1 && (
          <QuizStep question="Ваш класс?" field="grade" onNext={nextStep} />
        )}
        {step === 2 && (
          <QuizStep
            question="Интересующая страна?"
            field="country"
            onNext={nextStep}
          />
        )}
        {step === 3 && (
          <div className={styles.result}>
            <p>Ваша стратегия готова. Запишитесь на разбор в WhatsApp.</p>
          </div>
        )}
      </div>
    </section>
  );
};
