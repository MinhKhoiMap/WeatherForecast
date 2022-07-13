import React from 'react'
import {S_Navigate} from './Header_CSS'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
const Nav = () => {
  return (
    <S_Navigate className='Navigate'>
    <Link to="">Hôm nay </Link> {/* chỗ này để điền link */}
    <Link to="">Hàng giờ </Link> {/* chỗ này để điền link */}
    <Link to="">5 ngày </Link> {/* chỗ này để điền link */}
    
    </S_Navigate>
  )
}

export default Nav