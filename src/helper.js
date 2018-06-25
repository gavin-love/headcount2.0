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
          Location: upperCaseDistrict
        };
      }
      return allDistricts;
    }, {});
  };

  render() {
    return <h1>hello</h1>;
  }
}
