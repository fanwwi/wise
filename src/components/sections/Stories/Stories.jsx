"use client";

import styles from "./Stories.module.css";

const stories = [
  {
    name: "Абасбекова Амира",
    grant: "$20,000",
    country: "United States, New-York",
    image: "/images/students/amira.jpg",
    hook: "Поступила на летнюю программу от New-York University на 90% Грант",
    highlight: ["New-York University", "90% Грант"],
  },
  {
    name: "Кубанычбекова Айзирек",
    grant: "$24,500",
    country: "United States, Massachusetts",
    image: "/images/students/aizirek.jpg",
    hook: "Поступила на летнюю программу от Umass Amherst БЕСПЛАТНО",
    highlight: ["Umass Amherst", "БЕСПЛАТНО"],
  },
  {
    name: "Баялиев Даниел",
    grant: "$30,000",
    country: "United States",
    image: "/images/students/daniel.jpg",
    hook: "Получил 100% финансирование летних программ Yale, Fordham и NYU",
    highlight: ["100% финансирование", "Yale, Fordham и NYU"],
  },
  {
    name: "Алиман Бакытбек Кызы",
    grant: "$23,000",
    country: "United States",
    image: "images/students/aliman.jpg",
    hook: "Получила приглашения на летние программы Cornell, Dartmouth, NYU и Rise с 100% финансированием",
    highlight: ["Cornell, Dartmouth, NYU и Rise", "100% финансированием"],
  },
  {
    name: "Байганова Дамели",
    grant: "$15,000",
    country: "United States",
    image: "images/students/dameli.jpg",
    hook: "Отобрана в престижные программы Fordham, NYU и Polygence с полным грантом",
    highlight: ["Fordham, NYU и Polygence", "полным грантом"],
  },
  {
    name: "Нурланбекова Бегимай",
    grant: "$10,000",
    country: "United States",
    image: "images/students/begimai.jpg",
    hook: "Поступила на элитные летние программы от NYU, Tufts и St. John’s college full на 100% грант",
    highlight: ["NYU, Tufts и St. John’s college full", "100% грант"],
  },
];

export default function Stories() {
  return (
    <section className={styles.section} id="results">
      <h2 className={styles.title}>Истории, которые меняют жизнь</h2>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {stories.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageBox}>
                <img
                  src={s.image}
                  className={styles.image}
                  alt={`Student success story - ${s.name} from ${s.country}`}
                />

                <div className={styles.overlay}>
                  <h3 className={styles.hook}>
                    {(() => {
                      let text = s.hook;

                      s.highlight.forEach((item, index) => {
                        text = text.replace(item, `|||${index}|||`);
                      });

                      return text
                        .split(/(\|\|\|\d+\|\|\|)/)
                        .map((part, idx) => {
                          const match = part.match(/\|\|\|(\d+)\|\|\|/);

                          if (match) {
                            const highlightText = s.highlight[Number(match[1])];

                            return (
                              <span key={idx} className={styles.highlight}>
                                {highlightText}
                              </span>
                            );
                          }

                          return part;
                        });
                    })()}
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
