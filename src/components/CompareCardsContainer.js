import React from "react";
import Card from "./Card";

const CompareCardsContainer = ({ selectedDistricts }) => {
  const allSelectedDistricts = selectedDistricts.map(
    (selectedDistrict, index) => {
      return (
        <Card
          location={selectedDistrict.Location}
          stats={selectedDistrict.stats}
          key={index}
        />
      );
    }
  );
  return <div>{allSelectedDistricts}</div>;
};

export default CompareCardsContainer;
