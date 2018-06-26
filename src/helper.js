import React from "react";

export default class DistrictRepository {
  constructor(props) {
    this.stats = this.noDuplicates(props);
  }

  noDuplicates = props => {
    return props.reduce((allDistricts, school) => {
      const upperCaseDistrict = school.Location.toUpperCase();
      if (!allDistricts[upperCaseDistrict]) {
        allDistricts[upperCaseDistrict] = {
          Location: upperCaseDistrict,
          stats: {}
        };
      }
      return allDistricts;
    }, []);
  };

  findByName = location => {
    // console.log(this.stats);
    if (location) {
      const upperCaseLocation = location.toUpperCase();
      return this.stats[upperCaseLocation];
    }
    return undefined;
  };

  render() {
    return <h1>hello</h1>;
  }
}
