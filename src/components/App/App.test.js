import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
let container

beforeEach(() => (container = shallow(<App />)))
it('renders without crashing', () => {
  shallow(<App />);
});

it('should render a div ', () => {
  expect(container.find('div').length).toEqual(1);
});