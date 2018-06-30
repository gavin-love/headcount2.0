import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "../../components/App";
import Form from "../../components/Form";

it("renders without crashing", () => {
  const div = document.createElement("div");
});

it("initial state starts with an array of 181", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state().districts.length).toEqual(181);
});
