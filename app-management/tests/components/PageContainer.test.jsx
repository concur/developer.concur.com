import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PageContainer from '../../components/PageContainer';

describe('<PageContainer />', () => {
  it('should render with a child component', () => {
    const child = <p>Test</p>;
    const page = shallow(<PageContainer>{child}</PageContainer>);

    expect(shallowToJson(page)).toMatchSnapshot();
  });
});
