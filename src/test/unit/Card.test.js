import React from "react";
import Card from "../../components/Card.js";
import { shallow } from "enzyme";

describe("Card", () => {
  let wrapper;
  let mockStats;
  let mockFunction;

  beforeEach(() => {
    mockStats = { 2004: 0.24, 2005: 0.63, 2006: 0.11 };
    mockFunction = jest.fn();
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return a stats card when passed an object with property of stats", () => {
    wrapper = shallow(
      <Card findAverages={mockFunction} location="colorado" stats={mockStats} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should return a stats card when passed an object with averages", () => {
    wrapper = shallow(
      <Card
        locationOne="COLORADO"
        locationOneAverage={0.53}
        comparedAverage={0.46}
        locationTwo="ACADEMY 20"
        locationTwoAverage={0.4}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
