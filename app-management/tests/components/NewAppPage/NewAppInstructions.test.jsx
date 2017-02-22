import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NewAppInstructions from '../../../components/NewAppPage/NewAppInstructions';

describe('<NewAppInstructions />', () => {
  it('renders with instructions on making a new app', () => {
    const page = shallow(<NewAppInstructions />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });
});
