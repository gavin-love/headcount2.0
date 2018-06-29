import React from "react";
import Card from "./Card";

const CompareCardsContainer = ({ selectedDistricts }) => {
  if (selectedDistricts) {
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
  } else {
    return <div></div>
  }
  }

export default CompareCardsContainer;
