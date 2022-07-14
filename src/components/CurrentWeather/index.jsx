import React from "react";
import styled from "styled-components";

import WeatherDetail from "./WeatherDetail";

import { GiSunrise, GiSunset, GiSunbeams, GiWindSlap } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdWaterDrop, MdCompress, MdVisibility } from "react-icons/md";
import { TbWind } from "react-icons/tb";
import { HiSun } from "react-icons/hi";

const CurrentWeather = () => {
  const location = "Thành phố Hồ Chí Minh";
  const temperature = 35;
  const sunriseTime = "5:37";
  const sunsetTime = "18:20";

  return (
    <S_CurrentWeather>
      <h2 className="today-weather__title">Thời tiết hôm nay tại {location}</h2>
      <div className="today-weather__header">
        <div className="today-weather__temp">
          <p>Cảm giác như</p>
          <p>{temperature}&deg;</p>
        </div>
        <div className="today-weather__suntime">
          <div className="clock">
            <div className="circle"></div>
            <div className="sun">
              <HiSun />
            </div>
          </div>
          <div className="time">
            <div className="sunrise">
              <span className="icon">
                <GiSunrise />
              </span>
              {sunriseTime}
            </div>
            <div className="sunset">
              <span className="icon">
                <GiSunset />
              </span>
              {sunsetTime}
            </div>
          </div>
        </div>
      </div>
      <ul className="today-weather__details">
        <WeatherDetail
          iconComp={<FaTemperatureHigh />}
          label="Cao/Thấp"
          info="--/24&deg;"
        />
        <WeatherDetail iconComp={<MdWaterDrop />} label="Độ ẩm" info="75%" />
        <WeatherDetail
          iconComp={<MdCompress />}
          label="Áp suất"
          info="1001.0mb"
        />
        <WeatherDetail
          iconComp={<MdVisibility />}
          label="Tầm nhìn"
          info="9.66km"
        />
        <WeatherDetail iconComp={<TbWind />} label="Gió" info="23km/giờ" />
        <WeatherDetail
          iconComp={<GiSunbeams />}
          label="Chỉ số UV"
          info="1 of 10"
        />
        <WeatherDetail
          iconComp={<GiWindSlap />}
          label="Chỉ số chất lượng không khí"
          info="55"
        />
      </ul>
    </S_CurrentWeather>
  );
};

export default CurrentWeather;

const S_CurrentWeather = styled.section`
  width: 100%;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #000;

  .today-weather__title {
    margin-left: 12px;
    margin-bottom: 25px;
  }

  .today-weather__header {
    display: flex;
    margin: 0 30px 25px;
  }

  .today-weather__temp {
    flex: 1;
  }

  .today-weather__temp p:nth-child(2) {
    margin-top: 7px;
    margin-left: 8px;
    font-size: 50px;
    font-weight: 600;
  }

  .today-weather__suntime .clock {
    margin-bottom: 20px;
    position: relative;
  }

  .today-weather__suntime .time {
    display: flex;
  }

  .today-weather__suntime .time .sunrise {
    margin-right: 16px;
  }

  .today-weather__suntime .time .icon {
    margin-right: 6px;
    font-size: 25px;
    color: #febc11;
  }

  .today-weather__details {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  .circle {
    width: 100px;
    height: 50px;
    border-top-left-radius: 54px;
    border-top-right-radius: 54px;
    border: 4px solid #e87538;
    border-bottom: none;
  }

  .sun {
    font-size: 25px;
    color: #febc11;
    position: absolute;
    top: 0;
  }
`;
