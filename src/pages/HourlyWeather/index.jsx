import React from "react";

import BodySection from "../../components/BodySection";
import HourlyWeatherHeader from "./HourlyWeatherHeader";
import HourlyWeatherList from "./HourlyWeatherList";

const HourlyWeather = () => {
  return (
    <BodySection
      mainContent={[
        <HourlyWeatherHeader currentLocation="Thành phố Hồ Chí Minh" accessTime={"16:05"} key="HourlyWeatherHeader"/>,
        <HourlyWeatherList today="Thứ Sáu, 15 tháng 7" key="HourlyWeatherList"/>,
      ]}
    />
  );
};

export default HourlyWeather;
