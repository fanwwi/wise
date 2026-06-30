import styles from "./TrustBar.module.css";

export const TrustBar = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <h2 className={styles.statsTitle}>Почему нам доверяют</h2>

        <p className={styles.statsSubtitle}>
          За каждым числом — реальные студенты, результаты и истории
          поступления.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>1000+</h3>
            <span>студентов уже с нами</span>
          </div>

          <div className={styles.statCard}>
            <h3>$5.5M+</h3>
            <span>полученных грантов</span>
          </div>

          <div className={styles.statCard}>
            <h3>7+</h3>
            <span>стран обучения</span>
          </div>

          <div className={styles.statCard}>
            <h3>10+</h3>
            <span>направлений подготовки</span>
          </div>

          <div className={styles.statCard}>
            <h3>3+ года</h3>
            <span>опыта в сфере образования</span>
          </div>
        </div>
      </div>
    </section>
  );
};
