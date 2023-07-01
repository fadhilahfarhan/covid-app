import StyledCard from "./Card.Styled";

// menerima props dikirim dari komponen global
const Card = (props) => {
  const { total, status } = props;
  return (
    <StyledCard>
      <h2>{status}</h2>
      <h1 className={status}>{total}</h1>
    </StyledCard>
  );
};

export default Card;
