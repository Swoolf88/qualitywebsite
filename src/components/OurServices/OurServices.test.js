import React from "react";
import { shallow } from "enzyme";
import OurServices from "./OurServices";

describe("OurServices", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OurServices />);
    expect(wrapper).toMatchSnapshot();
  });
});
