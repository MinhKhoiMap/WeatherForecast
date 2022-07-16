import React from "react";

import AirQuality from "../../components/AirQuality";
import BodySection from "../../components/BodySection";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";

const Home = () => {
  return (
    <BodySection
      mainContent={[<CurrentWeather />, <HourlyForecast />]}
      rightContent={[<AirQuality />]}
    />
  );
};

export default Home;
