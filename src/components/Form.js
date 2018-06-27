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
  };

  submitDistrict = event => {
    event.preventDefault();
    // console.log("submit works");

    this.props.filterSelectedDistricts(this.state.district);
  };

  render() {
    return (
      <form onSubmit={this.submitDistrict}>
        <input
          type="text"
          placeholder="Enter District"
          value={this.state.district}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
