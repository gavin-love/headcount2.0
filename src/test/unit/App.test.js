import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "../../components/App";
import Form from "../../components/Form";
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);

  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("initial state starts with an array of 181", () => {
  
    expect(wrapper.state().districts.length).toEqual(181);
  });

  describe('addDistricts', () => {
    it('should set districts state to list of districts', () => {

    })
  })

  describe('displaySearchedDistricts', () => {
    it('should set districts state to list of districts without being case sensitive', () => {      
      const expected =  [
        {
        "Location": "COLORADO", 
        "stats": {
        "2004": 0.24, 
        "2005": 0.278, 
        "2006": 0.337, 
        "2007": 0.395, 
        "2008": 0.536, 
        "2009": 0.598, 
        "2010": 0.64, 
        "2011": 0.672, 
        "2012": 0.695, 
        "2013": 0.703, 
        "2014": 0.741}
      }, 
      {
        "Location": "COLORADO SPRINGS 11", 
        "stats": {
          "2004": 0.069, 
          "2005": 0.509, 
          "2006": 0.638, 
          "2007": 0.994, 
          "2008": 0.992, 
          "2009": 1, 
          "2010": 0.993, 
          "2011": 0.994, 
          "2012": 0.993, 
          "2013": 0.989, 
          "2014": 0.994}
        }
      ]
  
      wrapper.instance().displaySearchedDistricts('COlOraDo');
      expect(wrapper.state().searchedDistricts).toEqual(expected);
    })
    })

    describe('findAverages', () => {
      it('should update state.selectedDistricts location object with average', () => {
        let expected = [{
          location: "COLORADO", 
          "stats": {
            "2004": 0.24, 
            "2005": 0.278, 
            "2006": 0.337, 
            "2007": 0.395, 
            "2008": 0.536, 
            "2009": 0.598, 
            "2010": 0.64, 
            "2011": 0.672, 
            "2012": 0.695, 
            "2013": 0.703, 
            "2014": 0.741},
          average: 0.5304545454545454
        }]
        
        wrapper.instance().findAverages('Colorado');
        expect(wrapper.state().selectedDistricts).toEqual(expected)
        })
      })

})



