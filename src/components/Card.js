import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
  const districtValues = Object.values(props.stats);
  const districtStat = districtValues.map((stat, index) => {
    if (stat >= .5) {
      return <li className="greater" key={index} >{stat}</li>
    } else {
      return <li className="lessThan" key={index} >{stat}</li>
      
    }
  })

  return (
    <div onClick={() => props.findAverages(props)} >
      <h1>{props.location}</h1>
      <ul>{districtStat}</ul>
    </div>
  )
}

export default Card;