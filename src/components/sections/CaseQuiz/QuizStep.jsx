"use client";

import styles from "./CaseQuiz.module.css";

export const QuizStep = ({ question, options, selected, onSelect }) => {
  return (
    <div className={styles.stepCard}>
      <h3 className={styles.question}>{question}</h3>

      <div className={styles.options}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={`${styles.option} ${
              selected === opt ? styles.activeOption : ""
            }`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
