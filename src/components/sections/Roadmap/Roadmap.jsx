import BrightBtn from "../../ui/BrightBtn/BrightBtn";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как проходит поступление</h2>

        <div className={styles.imageWrapper}>
          <img
            src="/images/roadmap.png"
            alt="Roadmap"
            className={styles.image}
          />
        </div>

        <BrightBtn href="https://wa.me/996504070414?text=Здравствуйте!%20Хочу%20начать%20бесплатную%20консультацию%20по%20поступлению">
          Начать с бесплатной консультации
        </BrightBtn>
      </div>
    </section>
  );
}
