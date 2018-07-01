import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import  '../styles/CardContainer.css'

const CardContainer = ({districts, findAverages, selectedDistricts}) => {
  const allDistricts = districts.map((district, index) => {
    // console.log(selectedDistricts)
    return <Card location={district.Location} stats={district.stats} key={index} selected={selectedDistricts} findAverages={findAverages} />
  })
  return (
    <div className="card-container">
    {allDistricts}
    </div>
  )
}

export default CardContainer;