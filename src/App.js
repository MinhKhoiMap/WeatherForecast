import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Currently_day from './Currently_day/Currently_day'
import Header from './Header/Header'
import Nav from './Header/Nav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/index'
import HourlyWeather from './pages/HourlyWeather'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import AddToDo from './pages/addTodo'
import Planned from './pages/planned'
import HourlyForecast from './components/HourlyForecast'
const App = () => {
  const [inforWeather, setInforWeather] = useState(null)

  return (
    <div>
      
        <Header inforWeather={inforWeather} setInforWeather = {setInforWeather}/>
        <Nav/>
        <Currently_day inforWeather={inforWeather}/>
      

        <Routes>
            <Route path="/" element={<Home inforWeather={inforWeather} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/HourlyForecast" element={<HourlyForecast />} />
            <Route path="/addtodo" element={<AddToDo />} />
            <Route path="/planned" element={<Planned />} />
      </Routes>
    </div>
  )
}

export default App