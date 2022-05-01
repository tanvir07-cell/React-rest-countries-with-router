import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { common } = props.country.name;
  return (
    <div>
      <p>
        Country :{" "}
        <small>
          <Link to={`/country/${common}`}>{common}</Link>
        </small>
      </p>
    </div>
  );
};

export default Country;
