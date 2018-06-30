import React from 'react';
import Card from './Card';

const CardContainer = ({districts, findAverages}) => {
  const allDistricts = districts.map((district, index) => {
    return <Card location={district.Location} stats={district.stats} key={index} findAverages={findAverages} />
  })
  return (
    <div>
    {allDistricts}
    </div>
  )
}

export default CardContainer;