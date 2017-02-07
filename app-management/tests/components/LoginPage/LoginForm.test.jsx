import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginForm from '../../../components/LoginPage/LoginForm';
import appReducer from '../../../reducers';

const store = createStore(appReducer);

describe('<LoginForm />', () => {
  it('should submit', () => {
    const onSubmitClick = jest.fn();
    const form = mount(
      <Provider store={store}>
        <LoginForm handleSubmit={onSubmitClick} />
      </Provider>
    );
    form.find('form').simulate('submit');
    
    expect(onSubmitClick).toHaveBeenCalled();
  });
});
