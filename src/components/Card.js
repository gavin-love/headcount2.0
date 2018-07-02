import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";

const Card = props => {
  if (props.stats) {
    const districtValues = Object.values(props.stats);
    const districtYears = Object.keys(props.stats);
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
    const districtYear = districtYears.map((year, index) => {
      return (
        <li className="greater" key={index}>
          {year}
        </li>
      );
    });

    return (
      <div onClick={() => 
        props.findAverages(props)} 
      className={"card " + (props.selected === true ? "selected": "")}>
        <h1>{props.location}</h1>
        <div className="lists">
          <ul className="year">{districtYear}</ul>
          <ul className="value">{districtStat}</ul>
        </div>
      </div>
    );
  } else if (!props.stats) {
    return (
      <div
        onClick={() => props.findAverages(props)}
        className={"card compareCard" + (props.selected ? "selected" : "")}
      >
        <h1>{props.locationOne}</h1>
        <h1>{props.locationOneAverage}</h1>
        <h1 className="comp-average">{props.comparedAverage}</h1>
        <h1>{props.locationTwo}</h1>
        <h1>{props.locationTwoAverage}</h1>
      </div>
    );
  }
};

Card.propTypes = {
  selected: PropTypes.bool,
  findAverages: PropTypes.func,
  stats: PropTypes.object,
  location: PropTypes.string,
  locationOne: PropTypes.string,
  locationOneAverage: PropTypes.number,
  locationTwoAverage: PropTypes.number,
  comparedAverage: PropTypes.number,
  locationTwo: PropTypes.string
};

export default Card;
