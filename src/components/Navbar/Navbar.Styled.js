import styled from "styled-components";

const StyledNavbar = styled.nav`
  /* Tampilan Mobile atau Small*/
    align-items: center;
    background-color: #06d6a0;
    color: white;
    padding: 1rem;

  .navbar__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  a{
    color: white;
  }

  h2 {
    cursor: pointer;
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 1rem 0;
  }

  li {
    margin: 0.5rem 0.2rem;
    cursor: pointer;
  }

  button {
    padding: 0.3rem 0.8rem;
    background-color: white;
    color: #06d6a0;
    border: white 1px solid;
    border-radius: 5px;
  }

  /* Tampilan Tablet atau Medium*/
  @media (min-width: 768px) {
    .navbar__container {
      padding: 0 1rem 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #06d6a0;
      color: white;
    }
    li {
      margin: 0 0.5rem 0;
    }

    h2 {
      margin: 0 2rem;
    }

    ul {
      margin: 0 1rem;
      display: flex;
    }

    .navbar__visibility {
      display: none;
    }
  }
`;

export default StyledNavbar;
