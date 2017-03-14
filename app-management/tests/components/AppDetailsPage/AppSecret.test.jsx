import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AppSecret from '../../../components/AppDetailsPage/AppSecret';

describe('<AppSecret />', () => {
  const defaultProps = {
    clickHandler: jest.fn(),
    appSecret: {
      clientSecret: '',
      error: '',
      isFetching: false,
    }
  };

  it('should call the click handler when "Get New Secret" is pressed', () => {
    const secret = shallow(<AppSecret {...defaultProps} />);
    secret.find('button').simulate('click');

    expect(defaultProps.clickHandler).toHaveBeenCalled();
  });

  it('should not display the secret if not provided', () => {
    const secret = shallow(<AppSecret {...defaultProps} />);

    expect(shallowToJson(secret)).toMatchSnapshot();
  });

  it('should display the secret if provided', () => {
    const props = {
      ...defaultProps,
      appSecret: {
        ...defaultProps.appSecret,
        clientSecret: 'a-test-secret',
      },
    };
    const secret = shallow(<AppSecret {...props} />);

    expect(shallowToJson(secret)).toMatchSnapshot();
  });
});
