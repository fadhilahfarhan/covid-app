import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  margin: 2rem;
  padding: 3rem;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);

  .Positif {
    color: #06d6a0;
  }
  .Sembuh {
    color: #118ab2;
  }
  .Meninggal {
    color: red;
  }
`;

export default StyledCard;
