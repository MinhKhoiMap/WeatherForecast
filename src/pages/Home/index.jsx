import React from "react";

import AirQuality from "../../components/AirQuality";
import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import AddToDo from "../addTodo";
import Planned from "../planned";

const Home = ({ inforWeather }) => {
  return (
    <BodySection
      mainContent={[<CurrentWeather inforWeather={inforWeather} />, <HourlyForecast />]}
      rightContent={[<AddToDo />, <Planned />]} // bao giờ cho lịch vào cái này 
    />
  );
};

export default Home;
