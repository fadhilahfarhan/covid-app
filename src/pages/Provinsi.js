import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Provinces from "../components/Provinces";
import provincesData from "../utils/constants/provinces";
import CovidForm from "../components/CovidForm";

function Main() {
  const [covid, setCovid] = useState(provincesData);

  return (
    <>
      <Hero />
      <Provinces/>
      <CovidForm/>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2>
      <Hello /> */}
    </>
  );
}

function Provinsi() {
  return (
    <>
      <Main />
    </>
  );
}

export default Provinsi;
