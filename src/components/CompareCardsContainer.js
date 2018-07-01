import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import '../styles/CompareCardContainer.css'

const CompareCardsContainer = ({ selectedDistricts }) => {
  if (selectedDistricts) {
    const allSelectedDistricts = selectedDistricts.map(
      (selectedDistrict, index) => {
        if (selectedDistrict.locationOne) {
          return (
            <Card
              locationOne={selectedDistrict.locationOne}
              locationOneAverage={selectedDistrict.locationOneAverage}
              comparedAverage={selectedDistrict.comparedAverage}
              locationTwo={selectedDistrict.locationTwo}
              locationTwoAverage={selectedDistrict.locationTwoAverage}
              key={index}
              findAverages={selectedDistrict.findAverages}
            />
          );
        }

        return (
          <Card
            findAverages={selectedDistrict.findAverages}
            location={selectedDistrict.location}
            stats={selectedDistrict.stats}
            key={index}
          />
        );
      }
    );

    return <div className="compare-cards-container">{allSelectedDistricts}</div>;
  } else {
    return <div />;
  }
};

export default CompareCardsContainer;
