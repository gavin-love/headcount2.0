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
    }, {});
  };

  findByName = location => {
    if (location) {
      const upperCaseLocation = location.toUpperCase();
      return this.stats[upperCaseLocation];
    }
    return undefined;
  }

  findAllMatches = location => {
    const locationKeys = Object.keys(this.stats);

    if (location) {
      const upperCaseLocation = location.toUpperCase();
      return locationKeys.reduce((matches, district) => {
        if(this.stats[district].Location.includes(upperCaseLocation)) {
          matches = [...matches, this.stats[district]]
        }

        return matches;
      }, [])
      } else {
        const defaultStats = [];
        locationKeys.forEach(location => {
          defaultStats.push(this.stats[location])
        })

        return defaultStats;
    }
  }
  

  render() {
    return <h1>hello</h1>;
  }
}
