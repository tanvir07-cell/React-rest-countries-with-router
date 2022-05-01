import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        {/* dynamic route below :  */}
        <Route
          path="/country/:countryName"
          element={<CountryDetail></CountryDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
