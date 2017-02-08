import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CertificationBadge from '../../components/CertificationBadge';

describe('<CertificationBadge />', () => {
  it('renders "CERTIFIED" if certified', () => {
    const badge = shallow(<CertificationBadge certified={true} />);

    expect(shallowToJson(badge)).toMatchSnapshot();
  });

  it('renders "NOT CERTIFIED" if not certified', () => {
    const badge = shallow(<CertificationBadge certified={false} />);

    expect(shallowToJson(badge)).toMatchSnapshot();
  });
});
