import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AppSecret from '../../../components/AppDetailsPage/AppSecret';

describe('<AppSecret />', () => {
  const defaultProps = {
    clickHandler: jest.fn(),
  };

  it('should call the click handler when "Get New Secret" is pressed', () => {
    const secret = shallow(<AppSecret {...defaultProps} />);
    secret.find('button').simulate('click');

    expect(defaultProps.clickHandler).toHaveBeenCalled();
  });
});
