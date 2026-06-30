"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    setScrolled(latest > 80);

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <a href="#main" className={styles.logoA}>
          <div className={styles.logo}>WISE</div>
        </a>
        <div className={styles.links}>
          <a href="#about">О нас</a>
          <a href="#countries">Страны</a>
          <a href="#results">Истории</a>
          <a href="#quiz">Подбор вуза</a>
          <a href="#faq">Вопросы</a>
        </div>

        <button className={styles.cta}>Получить консультацию</button>
      </nav>
    </motion.header>
  );
};
