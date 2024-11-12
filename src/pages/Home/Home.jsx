import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreDeseases from "../../components/ExploreDeseases/ExploreDeseases";
import { useState } from "react";
import AppDownload from "../../components/AppDownload/AppDownload";
import DiseaseDisplay from "../../components/DeseaseDisplay/DeseaseDisplay";
import Prediction from "../../components/Prediction/Prediction";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreDeseases category={category} setCategory={setCategory} />
      <DiseaseDisplay category={category} />
      <Prediction />
      <Header />

      <AppDownload />
    </div>
  );
};

export default Home;
