import Button from "../UI/Button";
import StyledHero from "./Hero.Styled";

const Hero = () => {
  return (
    <StyledHero>
      <section className="hero__left">
        <h1>Covid ID</h1>
        <p className="hero__subTitle">Monitoring Perkembangan Covid</p>
        <p>
          Covid ID adalah sebuah aplikasi untuk memantau perkembangan kasus
          Covid-19 di Indonesia. Aplikasi ini menyediakan informasi terkini
          mengenai jumlah kasus terkonfirmasi, pasien sembuh, dan pasien
          meninggal akibat Covid-19 di berbagai wilayah di Indonesia.
        </p>
        <div>
          <Button buttonSize="150" variant="primary">Vaccine</Button>
        </div>
      </section>
      <section className="hero__right">
        <img
          src={require("../../assets/img/Hero-image.png")}
          alt="logo"
        />
      </section>
    </StyledHero>
  );
};

export default Hero;
