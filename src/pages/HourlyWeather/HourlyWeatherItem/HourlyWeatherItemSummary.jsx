import React from "react";
import styled from "styled-components";

import { GiHeavyRain } from "react-icons/gi";
import { TbWind } from "react-icons/tb";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const HourlyWeatherItemSummary = ({
  time,
  temperature,
  iconCode,
  weather,
  rainVolumne,
  windSpeed,
  setShow,
  isShow,
}) => {
  const handleShowWeatherDetails = () => {
    setShow((prev) => !prev);
  };

  return (
    <S_HourlyWeatherItemSummary onClick={handleShowWeatherDetails} isShow={isShow}>
      <span className="time">{time}</span>
      <span className="temperature">{temperature}</span>
      <span className="weather">
        <figure className="weather__icon">
          <img
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt={weather}
          />
        </figure>
        <p className="weather__text">{weather}</p>
      </span>
      <span className="rain-volumne">
        <div className="rain-volumne__icon">
          <GiHeavyRain style={{ color: "#6adef8" }} />
        </div>
        {rainVolumne}mm
      </span>
      <span className="wind">
        <div className="wind__icon">
          <TbWind />
        </div>
        {windSpeed} km/giờ
      </span>
      <span className="arrow-down">
        {isShow ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </span>
    </S_HourlyWeatherItemSummary>
  );
};

export default HourlyWeatherItemSummary;

const S_HourlyWeatherItemSummary = styled.summary`
  padding: 10px 26px;
  font-size: 14px;
  outline: ${(props) => {
    return props.isShow ? "5px auto -webkit-focus-ring-color" : "unset";
  }};
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .1s ease-in;

  span {
    margin-right: 6px;
  }

  .time {
    flex-basis: 69px;
  }

  .temperature {
    flex-basis: 94px;
    font-size: 20px;
    font-weight: 600;
  }

  .weather {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .weather__icon {
    margin-right: 10px;
    width: 35px;
  }

  .weather__icon img {
    width: 100%;
  }

  .rain-volumne {
    flex-basis: 60px;
    display: flex;
    align-items: center;
  }

  .wind__icon,
  .rain-volumne__icon {
    margin-right: 4px;
  }

  .wind {
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .arrow-down {
    margin-left: 20px;
    font-size: 20px;
  }
`;
