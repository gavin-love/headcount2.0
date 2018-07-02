import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);  
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("initial state starts with an array of 181", () => {
    expect(wrapper.state().districts.length).toEqual(181);
  });

  describe('displaySearchedDistricts', () => {
    it('should set districts state to list of districts', () => {      
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
      ];
  
      wrapper.instance().displaySearchedDistricts('COlOraDo');
      expect(wrapper.state().searchedDistricts).toEqual(expected);
    });
  });

  describe('findAverages', () => {
    let expected = {
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
      average: 0.53
    };
    let actual = [{
      location: "COLORADO", 
      selected: true,
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
      average: 0.53
    }];

    

    test('findAverage for ACADEMY 20', () => {
        
      wrapper.instance().findAverages(expected);
      expect(wrapper.state().selectedDistricts[0].average).toEqual(0.53);
    });
    
    test('should update selectedDistricts location object with average', () => {
        
      wrapper.instance().findAverages(expected);
      expect(wrapper.state().selectedDistricts).toEqual(actual);
    });
  });

});
