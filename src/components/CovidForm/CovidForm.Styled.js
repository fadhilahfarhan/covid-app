import styled from "styled-components";

const StyledCovidForm = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;

  .covidForm__left {
    padding: 2rem 0;
  }

  img {
    max-width: 100%;
    padding: 0 1rem;
  }

  .covidForm__right {
    padding: 2rem 0;
    text-align: center;
  }

  h1 {
    color: #06d6a0;
    font-size: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  label{
    display: flex;
    margin: 1rem 0 0;
  }

  .covidForm__success {
    display: flex;
    margin: 1rem 0 0;
    color: #06d6a0;
  }

  select, input {
    width: 100%;
    height: 2rem;
    border: 2px solid #06d6a0;
    border-radius: 10px;
    padding: 0 0.4rem;
  }

  span {
    color: red;
    padding-left: 2px;
  }
  @media (min-width: 768px) {
    padding: 2rem 5rem;
    img {
      padding: 0 auto;
    }

    .covidForm__right {
      padding: 2rem;
    }
  }

  @media (min-width: 992px) {
    display: flex;
    margin: 4rem 0;

    .covidForm__left {
      flex-basis: 50%;
      margin: auto;
      padding: 0;
    }

    .covidForm__right {
      flex-basis: 40%;
      margin: auto;
      padding: 0;
    }

    button:hover {
      background-color: #06f0b2;
    }
  }
`;

export default StyledCovidForm;