import React from "react";
import styled from "styled-components";

import { BsSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const SunTime = ({ sunriseTime, sunsetTime }) => {
  return (
    <S_Time>
      <div className="sunrise">
        <span className="icon">
          <BsSunriseFill />
        </span>
        {sunriseTime}
      </div>
      <div className="sunset">
        <span className="icon">
          <BsFillSunsetFill />
        </span>
        {sunsetTime}
      </div>
    </S_Time>
  );
};

export default SunTime;

const S_Time = styled.div`
  margin-top: 20px;
  display: flex;

  .sunrise {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .sunset {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 6px;
    font-size: 25px;
    color: #febc11;
  }
`;
