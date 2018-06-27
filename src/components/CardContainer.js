import React from 'react';
import Card from './Card';

const CardContainer = ({districts}) => {
  const allDistricts = districts.map((district, index) => {
    return <Card location={district.Location} stats={district.stats} key={index} />
  })
  return (
    <div>
    {allDistricts}
    </div>
  )
}


  // {allDistricts}


export default CardContainer;