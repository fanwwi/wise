"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TrustBar.module.css";

const AnimatedNumber = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 900;
    const stepTime = 16;

    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <h3 className={styles.number}>
      {value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      <span className={styles.suffix}>{suffix}</span>
    </h3>
  );
};

export const TrustBar = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // один раз запускаем
        }
      },
      { threshold: 0.35 }, // когда 35% блока видно
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 1000, suffix: "+", label: "студентов уже с нами" },
    { value: 5.5, suffix: "M+", label: "полученных грантов" },
    { value: 7, suffix: "+", label: "стран обучения" },
    { value: 10, suffix: "+", label: "направлений подготовки" },
    { value: 3, suffix: "+", label: "года опыта в сфере образования" },
  ];

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <h2 className={styles.statsTitle}>Почему нам доверяют</h2>

        <p className={styles.statsSubtitle}>
          За каждым числом — реальные студенты, результаты и истории
          поступления.
        </p>

        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <AnimatedNumber value={s.value} suffix={s.suffix} start={start} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
