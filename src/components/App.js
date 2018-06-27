import React, { Component } from "react";
import "../styles/App.css";
import Form from '../components/Form';
import CardContainer from '../components/CardContainer';
import DistrictRepository from '../helper';
import kinderData from "../../src/data/kindergartners_in_full_day_program";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: []
    }
  }

  displayDistricts = () => {
  const district = new DistrictRepository(kinderData);
  const districtKeys = Object.keys(district.stats);

  const eachDistrict = districtKeys.map(key => {
    return district.stats[key]
  })

  this.setState({
    districts: eachDistrict
  })    
}

  componentDidMount() {
    this.displayDistricts()
  }

  render() {
    return (
      <div>
        <Form />
        <CardContainer districts={this.state.districts} />
      </div>
    )
  }
}

export default App;
