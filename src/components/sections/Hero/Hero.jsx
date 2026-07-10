"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import { PremiumButton } from "@/components/shared/PremiumButton/PremiumButton";

export default function Hero() {
  return (
    <section className={styles.hero} id="main">
      {/* Оптимизированный фон */}
      <div className={styles.backgroundWrapper}>
        <Image
          src="/images/hero-image.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />
      <div className={styles.grid} />
      <div className={styles.noise} />

      <div className={styles.content}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.badge}
        >
          Поступи в США • Европу • Азию
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.title}
        >
          Покажем университету <br />
          <span className={styles.accent}>настоящего тебя</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.subtitle}
        >
          В WISE programs мы помогаем школьникам из Кыргызстана, Казахстана и
          стран СНГ найти университет, который соответствует их целям, раскрыть
          свой потенциал и создать заявку, которую действительно замечают
          приёмные комиссии.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.ctaWrapper}
        >
          <PremiumButton text="Получить разбор профиля сейчас" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.secondaryCtaWrapper}
        >
          <a href="#quiz" className={styles.secondaryCta}>
            Узнать свои топ-3 университета{" "}
            <span className={styles.arrow}>→</span>
          </a>
        </motion.div>

        <div className={styles.statsDivider} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={styles.stats}
        >
          {[
            { n: "25 000+", t: "написанных слов для улучшения навыков эссе" },
            { n: "55+ часов", t: "стратегических видеоуроков о создании лучшего профиля" },
            {
              n: "19 часов",
              t: "1-на-1 разбор стратегии и профиля с экспертом",
            },
            { n: "1000+", t: "поступивших студентов в топовые ВУЗы" },
          ].map((item, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statNumber}>{item.n}</div>
              <div className={styles.statText}>{item.t}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
