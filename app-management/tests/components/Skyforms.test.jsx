import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { FieldWrapper, renderSelect, renderCheckbox, renderUris } from '../../components/Skyforms';

describe('<FieldWrapper />', () => {
  const props = {
    name: 'My field',
    label: 'my-field',
    touched: true,
    error: ['Required'],
    classNames: 'my-field',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FieldWrapper {...props}>
        <input type="text"/>
      </FieldWrapper>
    );
  });

  it('should display the state-error class when there is an error', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
