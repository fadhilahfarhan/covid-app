import StyledRegionsCard from "./RegionsCard.Styled";

const RegionsCard = ({region, numbers}) => {

  return (
    <StyledRegionsCard>
      <div className="content__header">
        <h2>{region}</h2>
      </div>
      <div>
        <div className="content__status">
          <div>
            <p>Confirmed</p>
            <h4>{numbers.confirmed}</h4>
          </div>
          <img src={require("../../assets/img/icon-mask.png")} alt="mask" />
        </div>
        <div className="content__status">
          <div>
            <p>Recovered</p>
            <h4>{numbers.recovered}</h4>
          </div>
          <img src={require("../../assets/img/icon-smile.png")} alt="mask" />
        </div>
        <div className="content__status">
          <div>
            <p>Deaths</p>
            <h4>{numbers.death}</h4>
          </div>
          <img src={require("../../assets/img/icon-skull.png")} alt="mask" />
        </div>
      </div>
    </StyledRegionsCard>
  );
};

export default RegionsCard;
