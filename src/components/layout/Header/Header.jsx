"use client";

import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import styles from "./Header.module.css";

export const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    setScrolled(latest > 80);

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
            <img
              src={scrolled ? "/images/logo2.png" : "/images/logo.png"}
              alt="WISE"
              className={styles.logo}
            />
          </a>

          <div className={styles.links}>
            <a href="#about">О нас</a>
            <a href="#countries">Страны</a>
            <a href="#results">Истории</a>
            <a href="#quiz">Подбор вуза</a>
            <a href="#contacts">Контакты</a>
          </div>

          <a
            className={styles.cta}
            href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20получить%20консультацию%20по%20поступлению"
            target="_blank"
            rel="noopener noreferrer"
          >
            Получить консультацию
          </a>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                className={styles.close}
                onClick={closeMenu}
                aria-label="Закрыть меню"
              >
                <HiOutlineX size={30} />
              </button>

              <a href="#about" onClick={closeMenu}>
                О нас
              </a>

              <a href="#countries" onClick={closeMenu}>
                Страны
              </a>

              <a href="#results" onClick={closeMenu}>
                Истории
              </a>

              <a href="#quiz" onClick={closeMenu}>
                Подбор университета
              </a>

              <a href="#contacts" onClick={closeMenu}>
                Контакты
              </a>

              <a
                className={styles.mobileButton}
                href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20получить%20консультацию%20по%20поступлению"
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить консультацию
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
