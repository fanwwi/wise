"use client";
import styles from "./CaseQuiz.module.css";

export const QuizStep = ({ question, field, onNext }) => {
  return (
    <div className={styles.step}>
      <h3 className={styles.question}>{question}</h3>
      <button
        className={styles.option}
        onClick={() => onNext(field, "9-10 класс")}
      >
        9-10 класс
      </button>
      <button
        className={styles.option}
        onClick={() => onNext(field, "11 класс")}
      >
        11 класс
      </button>
    </div>
  );
};
