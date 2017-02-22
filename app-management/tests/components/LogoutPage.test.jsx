import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { shallowToJson } from 'enzyme-to-json';
import LogoutPage from '../../components/LogoutPage';

describe('<LogoutPage />', () => {
  it('renders with logout text and link to the login page', () => {
    const page = shallow(<LogoutPage />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });
});
