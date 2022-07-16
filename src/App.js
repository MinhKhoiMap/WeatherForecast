import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HourlyWeather from "./pages/HourlyWeather";

function App() {
  console.log("Khoi commit");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hourly" element={<HourlyWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
