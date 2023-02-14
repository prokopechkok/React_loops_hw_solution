import React from "react";

export default function Country(props) {
  return (
    <div className="Country">
      The capital city of {props.country.name} is {props.country.capital}
    </div>
  );
}
