import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppEditForm from '../../../components/AppDetailsPage/AppEditForm';
import AppSecret from '../../../components/AppDetailsPage/AppSecret';
import appReducer from '../../../reducers';
import appFactory from '../../app.mock';

const store = createStore(appReducer);
const props = {
  handleSubmit: jest.fn(),
  initialValues: appFactory('id-1'),
};

describe('<AppEditForm />', () => {
  let form;

  beforeEach(() => {
    jest.clearAllMocks();
    form = mount(
      <Provider store={store}>
        <AppEditForm {...props} />
      </Provider>
    );
  });

  it('should submit', () => {
    form.find('form').simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
