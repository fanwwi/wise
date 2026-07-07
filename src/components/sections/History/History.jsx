"use client";
import React from "react";
import styles from "./History.module.css";
import {
  FaSchool,
  FaSearch,
  FaGlobeAmericas,
  FaBrain,
  FaSeedling,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function History() {
  return (
    <section className={styles.heroWrapper} id="history">
      <div className={styles.topBanner}>
        <h2 className={styles.bannerTitle}>
          WISE — система полного раскрытия личности кандидата для поступления в
          топ-университеты мира
        </h2>

        <div className={styles.wave}>
          <div className={styles.waveTrack}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
            </svg>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </div>
      </div>
      <h2 className={styles.sectionHeader}>
        Как появились <span>WISE programs</span>?
      </h2>

      <motion.div
        className={styles.storySection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.storyGrid}>
          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSchool className={styles.icon} />
            <h3>Обычный школьник из Кыргызстана</h3>
            <p>
              В 17 лет я не думал, что мировые университеты и международные
              программы вообще могут быть реальной целью для ученика из обычной
              школы. Вокруг никто не говорил о таких возможностях.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSearch className={styles.icon} />
            <h3>Возможность, о которой никто не рассказывал</h3>
            <p>
              Летние программы Yale, поступление в топовые университеты и
              глобальные стипендии казались чем-то только для детей с большими
              ресурсами и связями. Пока я случайно не узнал, что это возможно.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaGlobeAmericas className={styles.icon} />
            <h3>Первый шаг в большой мир</h3>
            <p>
              Я подал заявку, прошёл отбор и оказался среди студентов со всего
              мира. Самое важное открытие — это были такие же ребята из обычных
              семей, небольших городов и школ.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaBrain className={styles.icon} />
            <h3>Главное открытие</h3>
            <p>
              Их отличие было не в деньгах, не в происхождении и не в особых
              связях. Они просто знали, какие возможности существуют и как
              правильно к ним идти.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaLightbulb className={styles.icon} />
            <h3>Появилась идея WISE</h3>
            <p>
              Тогда я понял: талантливым ученикам часто не хватает не
              способностей, а правильной информации, стратегии и человека,
              который покажет путь.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaSeedling className={styles.icon} />
            <h3>Мы верим, что талант должен быть виден</h3>
            <p>
              Университеты ищут людей с историей,
              мышлением и потенциалом. Наша задача — помочь каждому сильному
              ученику раскрыть себя и показать университетам то, что часто
              остаётся незамеченным.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaRocket className={styles.icon} />
            <h3>Система, построенная на опыте</h3>
            <p>
              WISE объединяет стратегию поступления, развитие профиля,
              позиционирование и подготовку документов в единую систему, которая
              превращает хаос в понятный путь.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaGraduationCap className={styles.icon} />
            <h3>Результат для студентов</h3>
            <p>
              Сегодня мы помогаем ученикам находить международные возможности,
              усиливать свои истории и конкурировать за лучшие университеты
              мира.
            </p>
          </motion.div>

          <motion.div className={styles.storyCard} whileHover={{ y: -6 }}>
            <FaGlobeAmericas className={styles.icon} />
            <h3>Основатели прошли этот путь сами</h3>
            <p>
              Основатели WISE сами поступили в ведущие университеты США и сейчас
              обучаются на 100% грантовом финансировании. Мы передаём не теорию
              — мы делимся системой, которую проверили на собственном опыте.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
