import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #06d6a0;
  color: white;

  .footer__logo {
    cursor: pointer;
  }

  a{
    color: white;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: end;
  }

  li {
    margin: 0 0.2rem 0;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .footer__logo {
      margin: 0 2rem;
    }

    ul {
      margin: 0 2rem;
    }

    li {
      margin: 0 0.5rem;
    }
  }
`;

export default StyledFooter;
