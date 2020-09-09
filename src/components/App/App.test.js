import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
let container
beforeEach(() => (container = shallow(<App user='' />)))
it('renders without crashing', () => {
  shallow(<App />);
});

it('should render a div ', () => {
  expect(container.find('div').length).toEqual(1);
});

// it("should return github profile ",() => {
        
//   container.find("input").simulate('change', { target: { value: 'gktnkrdg'} })
//   container.find("input").simulate('keydown',{ key: 'Enter' }) 
//   expect(container.props('searchUser')).toBe('gktnkrdg');
// })
