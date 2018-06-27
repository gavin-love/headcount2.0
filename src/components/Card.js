import React from 'react';

const Card = (props) => {
  const districtValues = Object.values(props.stats);
  const districtStat = districtValues.map(stat => {
    return <li>{stat}</li>
  })

  return (
    <div>
      <h1>{props.location}</h1>
      <ul>{districtStat}</ul>
    </div>
  )
}

export default Card;