import React, { Component } from "react";
import '../styles/Form.css';
import PropTypes from 'prop-types';

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
        <h1>HEADCOUNT 2.0</h1>
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

Form.propTypes = {
  displaySearchedDistricts: PropTypes.func
};


