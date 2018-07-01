import React, { Component } from "react";
import '../styles/Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    this.props.displaySearchedDistricts(event.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter District"
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
        />
      </form>
    );
  }
}
