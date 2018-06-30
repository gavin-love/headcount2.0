import React from "react";
import Card from "./Card";

const CompareCardsContainer = ({ selectedDistricts }) => {
  if (selectedDistricts) {
    const allSelectedDistricts = selectedDistricts.map(
      (selectedDistrict, index) => {
        if (selectedDistrict.locationOne) {
          console.log(selectedDistrict);
          return (
            <Card
              locationOne={selectedDistrict.locationOne}
              locationOneAverage={selectedDistrict.locationOneAverage}
              comparedAverage={selectedDistrict.comparedAverage}
              locationTwo={selectedDistrict.locationTwo}
              locationTwoAverage={selectedDistrict.locationTwoAverage}
              key={index}
            />
          );
        }

        return (
          <Card
            location={selectedDistrict.location}
            stats={selectedDistrict.stats}
            key={index}
          />
        );
      }
    );

    return <div>{allSelectedDistricts}</div>;
  } else {
    return <div />;
  }
};

export default CompareCardsContainer;
