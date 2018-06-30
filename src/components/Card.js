import React from "react";
import "../styles/Card.css";

const Card = props => {
  if (props.stats) {
    const districtValues = Object.values(props.stats);
    const districtStat = districtValues.map((stat, index) => {
      if (stat >= 0.5) {
        return (
          <li className="greater" key={index}>
            {stat}
          </li>
        );
      } else {
        return (
          <li className="lessThan" key={index}>
            {stat}
          </li>
        );
      }
    });

    return (
      <div onClick={() => props.findAverages(props)}>
        <h1>{props.location}</h1>
        <ul>{districtStat}</ul>
      </div>
    );
  } else if (!props.stats) {
    console.log(props);
    return (
      <div className="compare-card">
        <h1>{props.locationOne}</h1>
        <h1>{props.locationOneAverage}</h1>
        <p>{props.comparedAverage}</p>
        <h1>{props.locationTwo}</h1>
        <h1>{props.locationTwoAverage}</h1>
      </div>
    );
  }
};

export default Card;
