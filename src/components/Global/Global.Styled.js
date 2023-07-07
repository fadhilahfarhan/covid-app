import styled from "styled-components";

const StyledGlobal = styled.div`
  text-align: center;
  background-color: #f8f9fa;
  padding: 2rem 1rem;

  h1 {
    color: #06d6a0;
  }

  p {
    color: #118ab2;
  }

  @media (min-width: 768px) {
    padding: 4rem 2rem;

    .global__groups {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 992px) {
    padding: 4rem 2rem;

    .global__groups {
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledGlobal;
