import React from "react"
import { shallow } from "enzyme"
import  Profile from "./Profile"

describe("Profile", () => {
    let container 

    beforeEach( () => (container  = shallow(<Profile/>)))
    
    it("should render a  <div>",() => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})