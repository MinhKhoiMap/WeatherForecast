import React from "react";
import styled from "styled-components";

const WeatherDetail = ({ iconComp, label, info }) => {
  return (
    <S_WeatherDetail>
      <div className="weather-detail__icon">{iconComp}</div>
      <p className="weather-detail__text">{label}</p>
      <p className="weather-detail__info">{info}</p>
    </S_WeatherDetail>
  );
};

export default WeatherDetail;

const S_WeatherDetail = styled.li`
  width: calc(50% - 20px);
  padding: 10px 16px 0;
  margin: 5px 10px;
  border-top: 1px solid #dedede;
  display: flex;
  align-items: center;

  .weather-detail__icon {
    font-size: 18px;
  }

  .weather-detail__text {
    flex: 1;
    margin: 0 10px;
  }
`;
