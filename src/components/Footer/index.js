import { Link } from "react-router-dom";
import StyledFooter from "./Footer.Styled";

function Footer() {
  return (
      <StyledFooter>
        <div className="footer__logo">
          <h2 >Covid ID</h2>
          <p>Developed By Fadhilah Farhan</p>
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
