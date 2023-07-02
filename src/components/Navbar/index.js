// import css, useEffect dan useState
import { useState, useEffect } from "react";
import StyledNavbar from "./Navbar.Styled";
import { Link } from "react-router-dom";

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
    <StyledNavbar>
      <div className="navbar__container">
        <div>
          <h2>Covid ID</h2>
        </div>
        {/* untuk menampilkan button pada ukurang kecil */}
        {smallScreen && (
          <div>
            <button onClick={handleMenu}>{menu ? "Close" : "Menu"}</button>
          </div>
        )}
        {/* menambahkan listItems pada ukuran large */}
        {largeScreen && (
          <div>
            <ul>
              <li>
                <Link to="/">Global</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/province">Provinsi</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* menu ini akan muncul jika button menjadi true */}
      {menu && (
        <div className="navbar__visibility">
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/province">Provinsi</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
