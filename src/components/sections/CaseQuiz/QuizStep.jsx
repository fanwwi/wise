"use client";
import styles from "./CaseQuiz.module.css";

export const QuizStep = ({ question, options, field, onNext }) => {
  return (
    <div className={styles.stepCard}>
      <h3 className={styles.question}>{question}</h3>

      <div className={styles.options}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={styles.option}
            onClick={() => onNext(field, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};