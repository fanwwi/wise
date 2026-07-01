"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      {/* glow background */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.container}>
        {/* brand */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>WISE</h2>
          <p className={styles.tagline}>
            Мы превращаем поступление в понятную систему: от твоего профиля до
            оффера из университета — без хаоса и догадок.
          </p>
        </div>

        {/* links */}
        <div className={styles.links}>
          <div>
            <h4>Продукт</h4>
            <a href="#countries">Страны</a>
            <a href="#quiz">Подобрать университет</a>
            <a href="https://wa.me/996504070414" target="_blank">
              Консультация
            </a>
          </div>

          <div>
            <h4>Компания</h4>
            <a href="#about">О нас</a>
            <a href="#results">Истории учеников</a>
          </div>

          <div>
            <h4>Контакты</h4>
            <a href="https://www.instagram.com/wise.programs/" target="_blank">
              Instagram
            </a>
            <a href="https://wa.me/996504070414" target="_blank">
              WhatsApp
            </a>
            <a href="#">Telegram</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} WISE. All rights reserved.</span>
        <span className={styles.small}>Built for ambitious students from Central Asia 🚀</span>
      </div>
    </footer>
  );
}
