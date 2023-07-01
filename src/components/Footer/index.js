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
            <li>Global</li>
            <li>Indonesia</li>
            <li>Provinsi</li>
            <li>About</li>
          </ul>
        </div>
      </StyledFooter>
  );
}

export default Footer;
