import styles from "./TrustBar.module.css";

export const TrustBar = () => {
  return (
    <section className={styles.bar}>
      <div className={styles.item}>
        <span className={styles.number}>150+</span>
        <span className={styles.label}>Поступивших</span>
      </div>
      <div className={styles.item}>
        <span className={styles.number}>9</span>
        <span className={styles.label}>Стран обучения</span>
      </div>
      <div className={styles.item}>
        <span className={styles.number}>$2M</span>
        <span className={styles.label}>Полученных грантов</span>
      </div>
    </section>
  );
};
