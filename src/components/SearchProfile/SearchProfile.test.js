import React from "react"
import { shallow } from "enzyme"
import  SearchProfile from "./SearchProfile"

describe("Profile", () => {
    let container 

    beforeEach( () => (container  = shallow(<SearchProfile/>)))
    
    it("should render a <div>",() => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
    it("should render a input",() => {
        expect(container.find("input").length).toBeGreaterThanOrEqual(1)
    })

    describe.each([
        ['abcdefg'],
        ['isisis@is'],
        ['slardar123'],
      ])(' parameter  %i value setstate', (expected) => {
        test("should username set state ${expected}",() => {

        container.find("input").simulate('change', { target: { value: expected} })
        expect(container.state().username).toBe(expected);
        console.log(container.state().username)
        expect(container.find('input').props().value).toBe(expected);      
        })
    });
})