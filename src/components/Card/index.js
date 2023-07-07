import StyledCard from "./Card.Styled";

// menerima props dikirim dari komponen global
const Card = ({ total, status }) => {

  return (
    <StyledCard>
      <h2>{status}</h2>
      <h1 className={status}>{total}</h1>
    </StyledCard>
  );
};

export default Card;
