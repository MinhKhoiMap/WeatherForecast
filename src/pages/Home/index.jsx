import React from "react";
import styled from "styled-components";

import AirQuality from "../../components/AirQuality";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";

const Home = () => {
  return (
    <S_Home>
      <div className="main__content">
        <CurrentWeather />
        <HourlyForecast />
      </div>
      <div className="right__content">
        <AirQuality />
      </div>
    </S_Home>
  );
};

export default Home;

const S_Home = styled.div`
  max-width: 1162px;
  margin: 12px auto;
display: flex;

  .main__content {
    margin-right: 12px;
    width: 70%;
  }

  .right__content {
    width: 30%;
  }
`;
