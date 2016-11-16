import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NotFound from '../../components/NotFound';

describe('<NotFound />', () => {
  it('renders with 404 text', () => {
    const page = shallow(<NotFound />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });
});
