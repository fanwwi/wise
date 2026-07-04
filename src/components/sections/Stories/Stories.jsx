"use client";

import styles from "./Stories.module.css";
import { FaPlay } from "react-icons/fa";

const stories = [
  {
    name: "Айгерим А",
    grant: "$120,000",
    country: "USA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу БЕСПЛАТНО",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Нурсултан К",
    grant: "$85,000",
    country: "Canada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу БЕСПЛАТНО",
    highlight: "БЕСПЛАТНО",
  },
  {
    name: "Мадина С",
    grant: "$60,000",
    country: "Germany",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyRG4I2IOBzS7tu2m4ktZ2KD22V2lEI5t94yPOemdyh7RwRTsLQJrc5QJ&s=10",
    hook: "Поступил на летнюю программу БЕСПЛАТНО",
    highlight: "БЕСПЛАТНО",
  },
];

export default function Stories() {
  const loop = [...stories, ...stories]; // 🔥 ключ к бесконечности

  return (
    <section className={styles.section} id="results">
      <h2 className={styles.title}>Истории, которые меняют жизнь</h2>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {loop.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={s.image} className={styles.image} />

                <div className={styles.badge}>История</div>

                <div className={styles.playBtn}>
                  <FaPlay className={styles.playIcon} />
                </div>

                <div className={styles.overlay}>
                  <h3 className={styles.hook}>
                    {s.hook.split(" ").map((w, idx) => (
                      <span
                        key={idx}
                        className={w === s.highlight ? styles.highlight : ""}
                      >
                        {w}{" "}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{s.name}</h3>
                  <span className={styles.grant}>{s.grant}</span>
                </div>

                <div className={styles.country}>{s.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
