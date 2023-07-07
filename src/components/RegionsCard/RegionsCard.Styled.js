import styled from "styled-components";

const StyledRegionsCard = styled.div`
  margin: 2rem 1rem;
  padding: 1rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  .content__header {
    text-align: center;
    color: #073B4C;
    margin: 2rem auto;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p{
    color: #64748B;
  }

  .status__confirmed{
    color: #06D6A0;
  }
  .status__recovered{
    color: #118AB2;
  }
  .status__death{
    color: #EF476F;
  }

  .content__status {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 380px;
  }
`;

export default StyledRegionsCard;
