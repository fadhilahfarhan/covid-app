import React, { useEffect, useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import axios from "axios";
import Regions from "../components/Regions";

function Main() {
  const [globalCovid, setGlobalCovid] = useState([]);
  const [regionsCovid, setRegionsCovid] = useState([]);

  const getGlobalCovidData = async () => {
    const GlobalCovidApiUrl = "https://covid-fe-2023.vercel.app/api/global.json";
    const response = await axios(GlobalCovidApiUrl);
    setGlobalCovid(response.data.global)
    setRegionsCovid(response.data.regions);
  }

  useEffect(() => {
    getGlobalCovidData()
  }, [])

  return (
    <>
      <Hero />
      <Global globalCovid={globalCovid} title="Global"/>
      <Regions regionsCovid={regionsCovid}/>
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
