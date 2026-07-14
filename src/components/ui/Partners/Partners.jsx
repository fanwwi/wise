"use client";

import styles from "./Partners.module.css";

const partners = [
  {
    name: "Arizona State University",
    logo: "https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/4105-universite-detat-larizona-asu.jpg?itok=fxkwwYmk",
  },
  {
    name: "Sapienza University of Rome",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41DkOD8jaYhHmU0wsNmkbi7Nz0fYsxCzt_CHVkEdZfvJ0266dvzfSUEOl&s=10",
  },
  {
    name: "DePaul University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3G3EJjfnxUvZTq_fkdIMNe6ub5YlUyD5xeY5FVYr7jPgWfzkC3eLEJY&s=10",
  },
  {
    name: "Temple University",
    logo: "https://graduatephiladelphia.org/wp-content/uploads/2016/01/Untitled-1_0001_Temple.jpg",
  },
  {
    name: "Rowan University",
    logo: "https://logowik.com/content/uploads/images/rowan-university8573.jpg",
  },
  {
    name: "Oregon State University",
    logo: "https://pentagram-production.imgix.net/44374b63-afac-43a2-8b77-d161ccf25c6f/ds_osu_15_newwebsite.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=%2C%2C%2C&w=640&s=4096a5970a75b8c028598c7a9ea85088",
  },
  {
    name: "Colorado State University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq6iEfwbF_33ALwvP8wMyiW_gGmXketeogH922SnFPw&s=10",
  },
  {
    name: "Marshall University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZll3ahjCfE0CIpM-JCkrXNQ6-ZViqaKjnTPnPA1KQW2S3-ojA3gUttA&s=10",
  },
  {
    name: "George Mason University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PFyIzwFXF5XIbr5VepHd4PM_zI7BWTVmBotSvteTukAuDhgGnhTLj9CO&s=10",
  },
  {
    name: "DREW University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jQ5brNyhmP96n_WnGBR7SoyTkHH6U6v6wBbOxGIv0Nc13huYrdXr5LI&s=10",
  },
  {
    name: "Saint Louis University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAwP31UJV3tIcFD-DVTQ30KY3_bd5Yrdzlgbyg069QLXwbciBGvrmN_E&s=10",
  },
  {
    name: "The University of Alabama at Birmingham",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrwQNQ_Vjcurfuko-7oNurBHuHBwxDbv4uEqEl-4NAT_Fw-To1WAICWQj&s=10",
  },
  {
    name: "Washington State University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ysAWq2AX2LKROqVhBa62ZKtJ3-AHMmnJgZ2a83csLac8dUcbJcEoTLsk&s=10",
  },
  {
    name: "Suffolk University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlmMcza6T9Pl-pnmnutcS6AxWG3zUzn8MnNCxDOgdwe_MuRr2L6BjzBaL&s=10",
  },
  {
    name: "Hofstra University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRC3F-o15AhzhNqHQEuBQccDX-qbqiTOTkrqs4731VZ21ZrX3WQw3YPo&s=10",
  },
  {
    name: "Illinois State University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfDlh-0T2iJqAWiT-w6Viuivw2K_koiYC4bdjPrEeBjRsMs4hr5pAtXY&s=10",
  },
];

export default function Partners() {
  const loop = [...partners, ...partners, ...partners];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Партнёры, которые <span>двигают</span> тебя к <span>офферу</span>
      </h2>

      <div className={styles.slider}>
        <div className={styles.track}>
          {loop.map((p, i) => (
            <div key={i} className={styles.card}>
              <img src={p.logo} alt={p.name} className={styles.logo} />
              <div className={styles.glow} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </section>
  );
}
