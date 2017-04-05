import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SignupForm from '../../../components/SignupPage/SignupForm';
import appReducer from '../../../reducers';

const store = createStore(appReducer);

describe('<SignupForm />', () => {
  it('should submit', () => {
    const onSubmitClick = jest.fn();
    const form = mount(
      <Provider store={store}>
        <SignupForm handleSubmit={onSubmitClick} />
      </Provider>
    );
    form.find('form').simulate('submit');
    
    expect(onSubmitClick).toHaveBeenCalled();
  });
});
