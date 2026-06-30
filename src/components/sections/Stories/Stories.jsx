"use client";

import styles from "./Stories.module.css";

const stories = [
  {
    name: "Айгерим А",
    grant: "$120,000",
    country: "USA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Нурсултан К",
    grant: "$85,000",
    country: "Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Мадина С",
    grant: "$60,000",
    country: "Germany",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Арман В",
    grant: "$95,000",
    country: "USA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Адинай И",
    grant: "$70,000",
    country: "Italy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Дамир А",
    grant: "$110,000",
    country: "Korea",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу бесплатно",
    highlight: "БЕСПЛАТНО",
  },
];

export default function Stories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Истории наших студентов</h2>

      <div className={styles.scroll}>
        {stories.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={s.image} className={styles.image} />

              <div className={styles.overlay}>
                <h3 className={styles.hook}>
                  {s.hook.split(" ").map((word, idx) => (
                    <span
                      key={idx}
                      className={
                        word.toUpperCase() === s.highlight
                          ? styles.highlight
                          : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h3>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.grant}>Сумма гранта: {s.grant}</p>
              <p className={styles.country}>{s.country}</p>

              <button className={styles.btn}>Посмотреть интервью</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
