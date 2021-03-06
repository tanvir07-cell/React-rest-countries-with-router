import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>This is the data of {countries.length} countries</h2>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
