"use client";

import { useRef } from "react";
import styles from "./Countries.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const countries = [
  {
    name: "USA",
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshOe6BIb5FtYf6DeY-YspoUjoEaE82ouMZ16h20pKMiygLTkeDIXP3Pdz&s=10",
    image: "/images/usa.webp",
    desc: "Топ университеты и сильная карьерная экосистема.",
    factors: "Безопасность • Технологии • Карьера",
    price: "$8,000+",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    image: "/images/canada.webp",
    desc: "Все что нужно для тебя: баланс образования, жизни и иммиграции.",
    factors: "Безопасность • Работа • Иммиграция",
    price: "$6,000+",
  },

  {
    name: "Italy",
    flag: "https://flagcdn.com/it.svg",
    image: "/images/italy.webp",
    desc: "Доступное образование и сильная культура искусства.",
    factors: "Искусство • История • Доступность",
    price: "$3,000+",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
    image: "/images/germany.webp",
    desc: "Бесплатное/дешёвое образование и сильная инженерия.",
    factors: "Инженерия • Экономика • Карьера",
    price: "€0–€2,000",
  },
  {
    name: "South Korea",
    flag: "https://flagcdn.com/kr.svg",
    image: "/images/korea.webp",
    desc: "Технологии, инновации и быстрый карьерный рост.",
    factors: "Технологии • Инновации • Образование",
    price: "$5,000+",
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/tr.svg",
    image: "/images/turkey.webp",
    desc: "Доступное образование и активная студенческая жизнь.",
    factors: "Доступность • Культура • География",
    price: "$2,000+",
  },
  {
    name: "China",
    flag: "https://flagcdn.com/cn.svg",
    image: "/images/china.webp",
    desc: "Сильные STEM программы и быстрое развитие технологий.",
    factors: "Технологии • STEM • Инновации",
    price: "$3,500+",
  },
  {
    name: "Hungary",
    flag: "https://flagcdn.com/hu.svg",
    image: "/images/hungary.webp",
    desc: "Европейское образование по доступной цене.",
    factors: "Медицина • Европа • Доступность",
    price: "$2,500+",
  },
  {
    name: "Poland",
    flag: "https://flagcdn.com/pl.svg",
    image: "/images/poland.webp",
    desc: "Быстро развивающаяся образовательная система Европы.",
    factors: "Экономика • IT • Европа",
    price: "$2,000+",
  },
  {
    name: "Malaysia",
    flag: "https://flagcdn.com/my.svg",
    image: "/images/malaysia.webp",
    desc: "Азиатский хаб с международными университетами.",
    factors: "Азия • Международность • Доступность",
    price: "$3,000+",
  },
];

export default function Countries() {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section} id="countries">
      <h2 className={styles.title}>Твоя страна. Твоя стратегия. Твой оффер.</h2>

      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className={styles.carousel} ref={ref}>
          {[...countries, ...countries].map((c, i) => (
            <div key={i} className={styles.card}>
              {/* IMAGE SECTION */}
              <div className={styles.imageBox}>
                <img
                  src={c.image}
                  className={styles.image}
                  alt={`${c.name} landscape representing education opportunities`}
                />

                <div className={styles.overlay} />

                <div className={styles.topContent}>
                  <img
                    src={c.flag}
                    className={styles.flag}
                    alt={`${c.name} flag`}
                  />
                  <h3 className={styles.country}>{c.name}</h3>
                </div>
              </div>

              {/* INFO */}
              <div className={styles.info}>
                <p className={styles.desc}>{c.desc}</p>

                <div className={styles.factors}>
                  <span>•</span> {c.factors}
                </div>

                <div className={styles.bottom}>
                  <div className={styles.priceBox}>
                    <span className={styles.priceLabel}>from</span>
                    <span className={styles.price}>{c.price}</span>
                  </div>

                  <a
                    className={styles.more}
                    href={`https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20получить%20план%20поступления%20в%20${encodeURIComponent(
                      c.name,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Получить стратегию →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.btn} onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
