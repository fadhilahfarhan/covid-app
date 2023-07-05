import dataIndonesia from "../../utils/constants/indonesia.js";
import Card from "../Card";
import { nanoid } from "nanoid";
import StyledGlobal from "./Global.Styled";

const Global = ({ globalCovid, title }) => {
  const data = globalCovid

console.log(data);

  return (
    <StyledGlobal>
      <h1>{`${title} Situation`}</h1>
      <p>Data Covid berdasarkan {title}</p>
      <div className="global__groups">
        {/* 
            - Looping data menggunakan map untuk melooping card
            - memberikan props kepada card yaitu total, status dan key
          */}
        {data.map((data) => (
          <Card total={data.total} status={data.status} key={nanoid()} />
        ))}
      </div>
    </StyledGlobal>
  );
};

export default Global;
