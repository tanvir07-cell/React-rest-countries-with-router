import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [countryName]);
  console.log(country[0]);
  return (
    <div>
      <h1>This is the country detail of : {countryName}</h1>

      <p>Capital : {country[0]?.capital}</p>
      <img src={country[0]?.flag} alt="" />
    </div>
  );
};

export default CountryDetail;
