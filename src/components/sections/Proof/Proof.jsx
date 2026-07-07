"use client";

import { motion } from "framer-motion";
import styles from "./Proof.module.css";
import {
  FaNewspaper,
  FaUniversity,
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Proof() {
  return (
    <section className={styles.section} id="proof">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.badge}>
          <FaNewspaper />
          MEDIA RECOGNITION
        </div>

        <h2 className={styles.title}>
          Наши истории <span>замечают медиа</span>
        </h2>

        <p className={styles.subtitle}>
          Реальные результаты студентов из Центральной Азии, которые получили
          доступ к мировому образованию.
        </p>

        <div className={styles.story}>
          <div className={styles.photo}>
            <img
              src="/images/dilnaz.jpg"
              alt="Дильназ Дуйшоналиева — основательница WISE Programs"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.source}>Limon KG</div>

            <h3>
              Дильназ Дуйшоналиева из Бишкека - сооснователь WISE programs
              получила <strong>14 приглашений</strong> от университетов и
              колледжей США
            </h3>

            <p>
              Её история стала примером того, что студент из Кыргызстана может
              конкурировать за возможности мирового уровня.
            </p>

            <div className={styles.amount}>$2 000 000+</div>

            <a
              href="https://limon.kg/ru/news:84396"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Читать статью в Limon KG
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <FaUniversity />
            <span>14+</span>
            <p>приглашений от вузов</p>
          </div>

          <div className={styles.stat}>
            <FaAward />
            <span>$2M+</span>
            <p>стипендий</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
