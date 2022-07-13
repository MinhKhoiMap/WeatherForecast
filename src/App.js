import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import Header from './Header/Header'
import Nav from './Header/Nav'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
    </div>
  )
}

export default App