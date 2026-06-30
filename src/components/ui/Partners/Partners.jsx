"use client";

import styles from "./Partners.module.css";

const partners = [
  {
    name: "Harvard University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6rsgkK17KedEwSEFJbkDpN5uN5v2EOquTgEPjdbvQq6GOIku-Gw1-hw&s=10",
  },
  {
    name: "MIT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl9Rnn6T5WNnD7ZE8bSCikAiHzwdfP7MrNJHuRAH3CL28TF3gt172eqY&s=10",
  },
  {
    name: "Stanford",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXMKyqD3BQyoFlwzib8-mSdDBjxaz3f5WM_6LWBFmneAzH_-n_9xEn5Yl&s=10",
  },
  {
    name: "Oxford",
    logo: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/oxford-university-logo.jpg",
  },
  {
    name: "Cambridge",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn61ebcN45AzUJmYSRJ1AHun-wxD4aP2-y0cJ7NKJvw&s=10",
  },
];

const Partners = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Наши партнёры</h2>

      <div className={styles.slider}>
        <div className={styles.track}>
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className={styles.card}>
              <img src={p.logo} className={styles.logo} />
              <div className={styles.overlay}>
                <span>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
