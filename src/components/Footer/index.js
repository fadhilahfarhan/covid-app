import { Link } from "react-router-dom";
import StyledFooter from "./Footer.Styled";

function Footer() {
  return (
      <StyledFooter>
        <div className="footer__logo">
          <h2><Link to={"/"}>Covid ID</Link></h2>
          <p>Developed By <Link to={"/about"}>Fadhilah Farhan</Link></p>
        </div>
        <div>
          <ul >
            <li><Link to="/">Global</Link></li>
            <li><Link to="/indonesia">Indonesia</Link></li>
            <li><Link to="/province">Provinsi</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </StyledFooter>
  );
}

export default Footer;
