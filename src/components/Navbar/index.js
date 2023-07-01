// import css, useEffect dan useState
import styles from "./index.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  // state menu untuk menentukan button ketika diklik
  const [menu, setMenu] = useState(false);
  // state untuk mentukan layar dari lebar keseluruhan layar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // menggunakan useEffect untuk menggunakan menambah objek window
  // objek window digunakan untuk mengakses properti layar
  // menggunakan method addEventListener untuk menangani event
  // innerWidth properti untuk mendapatkan nilai ukuran layar dalam satuan px
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  // smallscreen untuk ukuran mobile
  const smallScreen = screenWidth < 768;
  // largescreen untuk ukuran tablet dan laptop
  const largeScreen = screenWidth > 767;

  // untuk menentukan Menu akan false atau true
  const handleMenu = (e) => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div>
            <h2 className={styles.navbar__logo}>Covid ID</h2>
          </div>
          {/* untuk menampilkan button pada ukurang kecil */}
          {smallScreen && (
            <div>
              <button className={styles.navbar__button} onClick={handleMenu}>
                {menu ? "Close" : "Menu"}
              </button>
            </div>
          )}
          {/* menambahkan listItems pada ukuran large */}
          {largeScreen && (
            <div>
              <ul className={styles.navbar__listItems}>
                <li className={styles.navbar__item}>Global</li>
                <li className={styles.navbar__item}>Indonesia</li>
                <li className={styles.navbar__item}>Provinsi</li>
                <li className={styles.navbar__item}>About</li>
              </ul>
            </div>
          )}
        </div>
        {/* menu ini akan muncul jika button menjadi true */}
        {menu && (
          <div className={styles.navbar__visibility}>
            <ul className={styles.navbar__listItems}>
              <li className={styles.navbar__item}>Global</li>
              <li className={styles.navbar__item}>Indonesia</li>
              <li className={styles.navbar__item}>Provinsi</li>
              <li className={styles.navbar__item}>About</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
