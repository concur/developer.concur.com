import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LoadingSpinner from '../../components/LoadingSpinner';

describe('<LoadingSpinner />', () => {
  it('should render when loading and given a message', () => {
    const message = 'Fetching data';
    const spinner = shallow(<LoadingSpinner loading={true} message={message} />);

    expect(shallowToJson(spinner)).toMatchSnapshot();
  });

  it('should display a default message if no message is given', () => {
    const spinner = shallow(<LoadingSpinner loading={true} />);

    expect(shallowToJson(spinner)).toMatchSnapshot();
  });

  it('should display nothing if not loading', () => {
    const spinner = shallow(<LoadingSpinner loading={false} />);

    expect(shallowToJson(spinner)).toMatchSnapshot();
  });
});
