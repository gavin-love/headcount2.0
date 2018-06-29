import React, { Component } from "react";
import "../styles/App.css";
import Form from "../components/Form";
import CardContainer from "../components/CardContainer";
import DistrictRepository from "../helper";
import kinderData from "../../src/data/kindergartners_in_full_day_program";
import CompareCardsContainer from "./CompareCardsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: [],
      selectedDistricts: [],
      searchedDistricts: []
    };
  }

  addDistricts = () => {
    const district = new DistrictRepository(kinderData);
    const districtKeys = Object.keys(district.stats);
    const eachDistrict = districtKeys.map(key => {
      return district.stats[key];
    });

    this.setState({
      districts: eachDistrict
    });
  };

  filterSelectedDistricts = location => {
    const allSelectedDistricts = this.state.districts.filter(district => {
      const upperCaseLocation = location.toUpperCase();

      return district.Location == upperCaseLocation
    });

    this.setState({
      selectedDistricts: allSelectedDistricts
    });
  };

  displaySearchedDistricts = (location) => {
    const searchedDistricts = this.state.districts.filter(district => {
    const upperCaseLocation = location.toUpperCase();

      return district.Location.includes(upperCaseLocation)
    });

    this.setState({
      searchedDistricts: searchedDistricts
    })
  }

  componentDidMount() {
    this.addDistricts();
  }

  render() {
    if (this.state.searchedDistricts.length) {
      return (
        <div>
          <Form filterSelectedDistricts={this.filterSelectedDistricts} displaySearchedDistricts={this.displaySearchedDistricts} />
          <CompareCardsContainer
            selectedDistricts={this.state.selectedDistricts}
          />
          <CardContainer 
          districts={this.state.searchedDistricts} />
        </div>
      );
    }

    return (
      <div>
        <Form filterSelectedDistricts={this.filterSelectedDistricts} displaySearchedDistricts={this.displaySearchedDistricts} />
        <CompareCardsContainer
          selectedDistricts={this.state.selectedDistricts}
        />
        <CardContainer 
        districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
