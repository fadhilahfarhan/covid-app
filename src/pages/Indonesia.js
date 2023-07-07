import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Provinces from "../components/Provinces";
import axios from "axios";
import Global from "../components/Global";

function Main() {
  const [globalCovid, setGlobalCovid] = useState([]);


  const getIndonesiaCovidData = async () => {
    const indonesiaCovidApiUrl = "https://covid-fe-2023.vercel.app/api/indonesia.json";
    const response = await axios(indonesiaCovidApiUrl);
    setGlobalCovid(response.data.indonesia)
  };

  console.log();

  useEffect(() => {
    getIndonesiaCovidData();
  }, []);

  return (
    <>
      <Hero />
      <Global globalCovid={globalCovid} title="Indonesia"/>
      <Provinces/>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2>
      <Hello /> */}
    </>
  );
}

function Indonesia() {
  return (
    <>
      <Main />
    </>
  );
}

export default Indonesia;
