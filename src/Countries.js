import React from "react";
import Country from "./Country";

export default function Countries(props) {
  return (
    <ul className="Countries">
      {props.countries.map((country, index) => {
        return (
          <li key={index}>
            <Country country={country} />
          </li>
        );
      })}
    </ul>
  );
}
