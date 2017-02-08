import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ErrorAlert from '../../components/ErrorAlert';

describe('<ErrorAlert />', () => {
  it('should render if error is present', () => {
    const alert = shallow(<ErrorAlert error="Fetch failed" />);

    expect(shallowToJson(alert)).toMatchSnapshot();
  });

  it('should display nothing if there is no error', () => {
    const alert = shallow(<ErrorAlert error="" />);

    expect(shallowToJson(alert)).toMatchSnapshot();
  });
});
