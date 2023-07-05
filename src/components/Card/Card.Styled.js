import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  margin: 2rem;
  padding: 3rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);

  .confirmed {
    color: #06d6a0;
  }
  .recovered {
    color: #118ab2;
  }
  .death {
    color: red;
  }
`;

export default StyledCard;
