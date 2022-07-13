import React from 'react'
import styled from 'styled-components'
import { FaSun } from 'react-icons/fa';
import { FaSearchLocation } from 'react-icons/fa';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
//link css
import{S_Header,S_headLogo,S_headSearch,S_head_User}from './Header_CSS'
const Header = () => {
  return (
    <S_Header>
        <S_headLogo className="headLogo">
            <div className="imgLogo">
                <FaSun/>
            </div>
            <div className="contentLogo">
                <p>THE FORECAST WEATHER</p>
            </div>
        </S_headLogo>
        <S_headSearch className="headSearch">
                <p className="headSearch_content">Tỉnh thành phố </p>
                <div className="headSearch_icon">
                    <FaSearchLocation/>
                </div> 
        </S_headSearch>
        <S_head_User className="head_User">
            <div className="signIn">
                <Link to="">SIGN IN</Link> {/* chỗ này để điền link */}
            </div>
            <div className="signUp">
                <Link to="">SIGN UP</Link> {/* chỗ này để điền link */}
            </div>
        </S_head_User>
    </S_Header>

  )
}

export default Header
