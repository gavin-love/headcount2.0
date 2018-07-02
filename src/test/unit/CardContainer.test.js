import React from "react";
import CardContainer from "../../components/CardContainer.js";
import { shallow } from "enzyme";

describe("CardContainer", () => {
  let wrapper;
  let mockData;
  let mockFunction;

  beforeEach(() => {
    mockData = [
      { Location: "colorado", stats: { 2004: 0.24, 2005: 0.63, 2006: 0.11 } },
      { Location: "academy 20", stats: { 2012: 0.24, 2013: 0.63, 2014: 0.11 } }
    ];
    mockFunction = jest.fn();
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should", () => {
    wrapper = shallow(
      <CardContainer districts={mockData} findAverages={mockFunction} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
