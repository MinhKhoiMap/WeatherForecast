import React from 'react'
import styled from 'styled-components'

import {S_headerCurrently,S_container,S_location,S_contentCurrently} from './Currently_CSS'
const Currently_day = () => {
  return (
    <S_container >
            <S_headerCurrently className="headerCurrently">
                <S_location >
                        <span className="location_name">Hưng Yên</span>
                        <div className="curently_hour">Kể từ 10 giờ </div>{/* dùng gethour */}
                </S_location>
                
                <S_contentCurrently >
                    <div className="content_dedicate">
                        <span className="tempCurrently">28 </span>{/* call API */}
                        <span className="tempMin">30</span>
                        <span className="tempMax">30</span>
                        <span className="dateCurrently">30</span>
                    </div>
                    <div className="header_img">
                        {/* thay nguồn API sau  */}
                        <img src=" http://openweathermap.org/img/wn/02d.png" alt="" />
                    </div>
                </S_contentCurrently>
            </S_headerCurrently>
    </S_container>
  )
}

export default Currently_day