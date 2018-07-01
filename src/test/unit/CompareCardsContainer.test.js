import React from "react";
import ReactDOM from "react-dom";
import CompareCardsContainer from "../../components/CompareCardsContainer.js";
import { shallow } from "enzyme";

describe("CompareCardContainer", () => {
  let wrapper;
  let mockData;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    mockData = [{average: 34, findAverages: {mockFunction}, location: "colorado", stats: { 2004: 0.24,                  2005: 0.63, 2006: 0.11 }},
                {average: 12, findAverages: {mockFunction}, location: "academy 20", stats: { 2012: 0.24, 2013: 0.63, 2014: 0.11 }},
                {comparedAverage: 0.46, locationOne: "COLORADO", locationOneAverage: 0.53, locationTwo: "ACADEMY 20", locationTwoAverage: 0.40 }
              ];
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should", () => {
    wrapper = shallow(
      <CompareCardsContainer selectedDistricts={mockData} />
    );

    expect(wrapper).toMatchSnapshot();
  });

});