import RegionsCard from "../RegionsCard";
import StyledRegions from "./Regions.Styled";

const Regions = ({regionsCovid}) => {

  const data = regionsCovid;

  console.log(data);
  return (
    <StyledRegions>
      <div className="regions__container">
        <div className="regions__header">
          <h1>Situation By Regions</h1>
          <p>Bacaan Pilihan Covid</p>
        </div>
        <div className="regions__main">
          {data.map((data)=>(
            <RegionsCard region={data.name} numbers={data.numbers} key={data.name}/>
          ))}
        </div>
      </div>
    </StyledRegions>
  );
};

export default Regions;
