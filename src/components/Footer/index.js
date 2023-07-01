import styles from "./index.module.css"

function Footer() {
  return (
    <>
      <footer className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <h2 >Covid ID</h2>
          <p>Developed By Fadhilah Farhan</p>
        </div>
        <div>
          <ul className={styles.footer__listItems}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
