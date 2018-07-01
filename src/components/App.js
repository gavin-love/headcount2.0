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
      searchedDistricts: [],
      selectedDistricts: []
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

  displaySearchedDistricts = location => {
    const searchedDistricts = this.state.districts.filter(district => {
      const upperCaseLocation = location.toUpperCase();

      return district.Location.includes(upperCaseLocation);
    });

    this.setState({
      searchedDistricts: searchedDistricts
    });
  };

  findAverages = location => {
    if(this.state.selectedDistricts.length < 2) {
      const locationStats = Object.values(location.stats);
      let xyz;
      xyz = locationStats.reduce((average, num) => {
        average += num;
        return average;
      }, 0);
  
      const result = xyz / locationStats.length
      const average = Math.round(result * 1000) / 1000

      const newSelectedDistrict = {
        ...location,
        average,
        selected: true
      };
      const selectedDistricts = [
        ...this.state.selectedDistricts,
        newSelectedDistrict
      ];
      
      this.setState({ selectedDistricts }, () => {
        this.compareAverages(this.state.selectedDistricts);
      });
    } else {
      let unshiftedDistricts = this.state.selectedDistricts.unshift();
      const locationStats = Object.values(location.stats);
      let xyz;
      xyz = locationStats.reduce((average, num) => {
        average += num;
        return average;
      }, 0);
  
      const newSelectedDistrict = {
        ...location,
        average: xyz / locationStats.length,
        selected: true
      };
      const selectedDistricts = [
        ...unshiftedDistricts,
        newSelectedDistrict
      ];
  
      this.setState({ selectedDistricts }, () => {
        this.compareAverages(this.state.selectedDistricts);
      });
    }
    }

    compareAverages = districts => {
    if (this.state.selectedDistricts.length === 2) {

      const roundNumber = (number) => {
        return Math.round(number * 1000) / 1000
      }

      const result = (districts[0].average + districts[1].average) / 2;
      const comparedAverage = roundNumber(result)

      const locationOneAverage = roundNumber(districts[0].average);
      const locationTwoAverage = roundNumber(districts[1].average);

      const compareCardData = {
        locationOne: districts[0].location,
        locationOneAverage,
        comparedAverage,
        locationTwo: districts[1].location,
        locationTwoAverage,
        selected: true
      };

      const selectedDistricts = [
        ...this.state.selectedDistricts,
        compareCardData
      ];

      this.setState({ selectedDistricts });
    }
  };

  componentDidMount() {
    this.addDistricts();
  }

  render() {
    if (this.state.searchedDistricts.length) {
      return (
        <div>
          <Form
            filterSelectedDistricts={this.filterSelectedDistricts}
            displaySearchedDistricts={this.displaySearchedDistricts}
          />
          <CompareCardsContainer
            selectedDistricts={this.state.selectedDistricts}
            findAverages={this.findAverages}
          />
          <CardContainer
            districts={this.state.searchedDistricts}
            findAverages={this.findAverages}
          />
        </div>
      );
    }

    return (
      <div>
        <Form
          filterSelectedDistricts={this.filterSelectedDistricts}
          displaySearchedDistricts={this.displaySearchedDistricts}
        />
        <CompareCardsContainer
          selectedDistricts={this.state.selectedDistricts}
        />
        <CardContainer
          districts={this.state.districts}
          findAverages={this.findAverages}
          selectedDistricts={this.state.selectedDistricts}
        />
      </div>
    );
  }
}

export default App;
