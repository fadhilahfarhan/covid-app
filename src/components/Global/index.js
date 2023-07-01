import dataIndonesia from "../../utils/constants/indonesia.js";
import Card from "../Card";
import { nanoid } from "nanoid";
import StyledGlobal from "./Global.Styled";

const Global = () => {
  // membuat variable berisi data dari indonesia.js
  const data = dataIndonesia;
  return (
    <StyledGlobal>
      <h1>Indonesia</h1>
      <p>
        Data Covid berdasarkan Indonesia
      </p>
      <div className="global__groups">
        {/* 
            - Looping data menggunakan map untuk melooping card
            - memberikan props kepada card yaitu total, status dan key
          */}
        {data.indonesia.map((data) => (
          <Card total={data.total} status={data.status} key={nanoid()} />
        ))}
      </div>
    </StyledGlobal>
  );
};

export default Global;
