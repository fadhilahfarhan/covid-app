import styles from "./index.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero__container}>
        <section className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <p className={styles.hero__subTitle}>Monitoring Perkembangan Covid</p>
          <p className={styles.hero__description}>
            Covid ID adalah sebuah aplikasi untuk memantau
            perkembangan kasus Covid-19 di Indonesia. Aplikasi ini menyediakan
            informasi terkini mengenai jumlah kasus terkonfirmasi, pasien
            sembuh, dan pasien meninggal akibat Covid-19 di berbagai wilayah di
            Indonesia.
          </p>
          <div>
            <button className={styles.hero__button} href="##">
              Vaccine
            </button>
          </div>
        </section>
        <section className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={require("../../assets/img/Hero-image.png")}
            alt="logo"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;
