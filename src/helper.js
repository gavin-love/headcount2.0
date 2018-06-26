import React from "react";

export default class DistrictRepository {
  constructor(props) {
    this.stats = this.noDuplicates(props);
  }

  noDuplicates = props => {
    return props.reduce((allDistricts, school) => {
      const upperCaseDistrict = school.Location.toUpperCase();
      const year = school.TimeFrame;
      const percentage = school.Data;
      let roundedPercentage = 0;

      if (typeof percentage === "number") {
        roundedPercentage = Math.round(percentage * 1000) / 1000;
      }

      if (!allDistricts[upperCaseDistrict]) {
        allDistricts[upperCaseDistrict] = {
          Location: upperCaseDistrict,
          stats: { [year]: roundedPercentage }
        };
      } else {
        allDistricts[upperCaseDistrict].stats = {
          ...allDistricts[upperCaseDistrict].stats,
          [year]: roundedPercentage
        };
      }

      return allDistricts;
    }, []);
  };

  findByName = location => {
    if (location) {
      const upperCaseLocation = location.toUpperCase();
      return this.stats[upperCaseLocation];
    }
    return undefined;
  }

  findAllMatches = location => {
    return Object.keys(this.stats)
  }

  render() {
    return <h1>hello</h1>;
  }
}
