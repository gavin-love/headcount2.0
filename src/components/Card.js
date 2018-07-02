import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";

const Card = props => {
  const { 
    stats, 
    findAverages, 
    selected, 
    location, 
    locationOne, 
    locationOneAverage, 
    comparedAverage, 
    locationTwo, 
    locationTwoAverage 
  } = props;

  if (stats) {
    const districtValues = Object.values(stats);
    const districtYears = Object.keys(stats);
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

        findAverages(props)} 
      className={"card " + (selected === true ? "selected": "")}>
        <h1>{location}</h1>
        <div className="lists">
          <ul className="year">{districtYear}</ul>
          <ul className="value">{districtStat}</ul>
        </div>
      </div>
    );
  } else if (!stats) {
    return (
      <div 
        onClick={() => findAverages(props)}
        className={"card compareCard" + (selected ? "selected": "")}>
        <h1>{locationOne}</h1>
        <h1>{locationOneAverage}</h1>
        <h1 className="comp-average">{comparedAverage}</h1>
        <h1>{locationTwo}</h1>
        <h1>{locationTwoAverage}</h1>
      </div>
    );
  }
};

Card.propTypes = {

  findAverages: PropTypes.func,
  selected: PropTypes.bool,
  stats: PropTypes.object,
  location: PropTypes.string,
  locationOne: PropTypes.string,
  locationOneAverage: PropTypes.number,
  locationTwoAverage: PropTypes.number,
  comparedAverage: PropTypes.number,
  locationTwo: PropTypes.string
};

export default Card;
