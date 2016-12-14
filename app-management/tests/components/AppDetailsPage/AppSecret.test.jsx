import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AppSecret from '../../../components/AppDetailsPage/AppSecret';

describe('<AppSecret />', () => {
  const defaultProps = {
    clickHandler: jest.fn(),
    secret: 'a-test-secret',
    showSecret: false,
  };

  it('should call the click handler when "Get New Secret" is pressed', () => {
    const secret = shallow(<AppSecret {...defaultProps} />);
    secret.find('button').simulate('click');

    expect(defaultProps.clickHandler).toHaveBeenCalled();
    expect(shallowToJson(secret)).toMatchSnapshot();
  });

  it('should not display the secret if not provided', () => {
    const props = {
      ...defaultProps,
      secret: null,
    };
    const secret = shallow(<AppSecret {...props} />);

    expect(shallowToJson(secret)).toMatchSnapshot();
  });

  it('should not display the secret if showSecret is false', () => {
    const props = {
      ...defaultProps,
      showSecret: true,
    };
    const secret = shallow(<AppSecret {...props} />);

    expect(shallowToJson(secret)).toMatchSnapshot();
  });
});
