import React, { useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Provinces from "../components/Provinces";
import provincesData from "../utils/constants/provinces";
import CovidForm from "../components/CovidForm";

// lifting state
// state yang dibuat datanya berasal dari provinces.js
// menjadikan state menjadi props ke provinces dan CovidForm
// props yang dikirimkan berupa data covid dan setCovid untuk merubah datanya
function Main() {
  const [covid, setCovid] = useState(provincesData);
  return (
    <>
      <Hero />
      <Global />
      <Provinces covid={covid} setCovid={setCovid} />
      <CovidForm covid={covid} setCovid={setCovid} />
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2>
      <Hello /> */}
    </>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
