"use client";

import { motion } from "framer-motion";
import styles from "./Whyus.module.css";
import Image from "next/image";

const Whyus = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.heroWrapper}>
        <div className={styles.topBanner}>
          <h2 className={styles.bannerTitle}>
            WISE — World International Study Experience Programs — мы
            фокусируемся на полном раскрытии кандидата.
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Мы
            <span className={styles.accent}> формируем личность, </span>
            которую выбирают
            <span className={styles.accent}> университеты.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.text}
          >
            Мы не ограничиваемся оценками, тестами и списком достижений. Мы
            анализируем, кто стоит за ними: как человек мыслит, как принимает
            решения и в каком направлении развивается. 
            <br />
            <br />
            Наша задача — собрать
            целостный профиль студента и представить его приёмной комиссии так,
            чтобы он выглядел история сильного кандидата с потенциалом и
            направлением роста.
          </motion.p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={styles.right}
        >
          <Image
            src="/images/team.png"
            alt="Students abroad"
            fill
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;
