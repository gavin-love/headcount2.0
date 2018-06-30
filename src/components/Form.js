import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: ""
    };
  }

  handleChange = event => {
    this.setState({
      district: event.target.value
    });
    this.props.displaySearchedDistricts(event.target.value);
  };

  onKeyDown = event => {
    if (event.keyCode === 8) {
      this.handleChange(event);
    }
  };

  submitDistrict = event => {
    event.preventDefault();
    // console.log("submit works");

    this.props.filterSelectedDistricts(this.state.district);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter District"
          value={this.state.district}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
        />
      </form>
    );
  }
}
