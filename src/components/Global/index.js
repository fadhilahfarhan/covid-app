import Card from "../Card";
import StyledGlobal from "./Global.Styled";

const Global = ({ globalCovid, title }) => {
  const data = globalCovid

  return (
    <StyledGlobal>
      <h1>{`${title} Situation`}</h1>
      <p>Data Covid berdasarkan {title}</p>
      <div className="global__groups">
        {data.map((data) => (
          <Card total={data.total} status={data.status} key={data.status} />
        ))}
      </div>
    </StyledGlobal>
  );
};

export default Global;
