import React from "react";

const CountryItem = ({ country, onRemove }) => {
  return (
    <div>
      <span>{country}</span>
      <button onClick={() => onRemove(country)}>x</button>
    </div>
  );
};

export default CountryItem;