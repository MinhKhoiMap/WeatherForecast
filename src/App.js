import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import Currently_day from './Currently_day/Currently_day'
import Header from './Header/Header'
import Nav from './Header/Nav'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <Currently_day/>
    </div>
  )
}

export default App