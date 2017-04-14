import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppEditForm from '../../../components/AppDetailsPage/AppEditForm';
import appReducer from '../../../reducers';

describe('<AppEditForm />', () => {
  const onSubmitClick = jest.fn();
  let form, store;

  beforeEach(() => {
    jest.resetAllMocks();
    store = createStore(appReducer)
    form = mount(
      <Provider store={store}>
        <AppEditForm handleSubmit={onSubmitClick} />
      </Provider>
    );
  })

  it('should submit', () => {
    form.find('form').simulate('submit');

    expect(onSubmitClick).toHaveBeenCalled();
  });
});
