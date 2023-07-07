// import css, useEffect dan useState
import { useState, useEffect } from "react";
import StyledNavbar from "./Navbar.Styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const smallScreen = screenWidth < 768;
  const largeScreen = screenWidth > 767;

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
          <h2><Link to={"/"}>Covid ID</Link></h2>
        </div>

        {smallScreen && (
          <div>
            <button onClick={handleMenu}>{menu ? "Close" : "Menu"}</button>
          </div>
        )}

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
