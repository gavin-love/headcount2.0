import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import  '../styles/CardContainer.css'

const CardContainer = ({districts, findAverages, selectedDistricts}) => {
  const allDistricts = districts.map((district, index) => {
    console.log('1', selectedDistricts)
    console.log('2', districts)
    return <Card location={district.Location} stats={district.stats} key={index} selected={district.selected}  findAverages={findAverages} />
  })
  return (
    <div className="card-container">
    {allDistricts}
    </div>
  )
}

export default CardContainer;