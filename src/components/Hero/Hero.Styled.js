import styled from "styled-components";

const StyledHero = styled.div`
  padding: 2rem;

  .hero__left {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: #06d6a0;
  }

  .hero__subTitle {
    color: #118ab2;
    margin: 0 0 1rem;
  }

  p {
    text-align: center;
    color: #64748B;
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 992px) {
    margin: 1rem 0;
    display: flex;
    align-items: center;

    .hero__left {
      flex-basis: 30%;
      margin: auto;
      align-items: start;
    }

    p {
      text-align: left;
    }

    .hero__right {
      flex-basis: 60%;
    }

    button:hover {
      background-color: #06f0b2;
    }
  }
`;

export default StyledHero;
