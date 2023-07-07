import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  margin: 2rem;
  padding: 3rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  h2{
    color: #073B4C;
    margin-bottom: 1rem;
  }

  .confirmed {
    color: #06d6a0;
  }
  .recovered {
    color: #118ab2;
  }
  .death {
    color: red;
  }

  @media(min-width: 768px){
    width: 350px;
  }
`;

export default StyledCard;
