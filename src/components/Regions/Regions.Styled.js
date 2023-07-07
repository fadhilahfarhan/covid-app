import styled from "styled-components";

const StyledRegions = styled.div`
  padding: 1rem;

  .regions__header{
    text-align: center;
    margin: 2rem auto;
  }

  h1{
    color: #06D6A0;
  }

  .regions__header p{
    color: #118AB2;
  }


  @media (min-width: 768px) {
    .regions__main{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export default StyledRegions;
