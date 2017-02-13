import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NewAppForm from '../../../components/NewAppPage/NewAppForm';
import { CheckboxField, FieldError } from '../../../components/FormFields';
import appReducer from '../../../reducers';

describe('<NewAppForm />', () => {
  const onSubmitClick = jest.fn();
  let form, store;

  beforeEach(() => {
    jest.resetAllMocks();
    store = createStore(appReducer)
    form = mount(
      <Provider store={store}>
        <NewAppForm handleSubmit={onSubmitClick} />
      </Provider>
    );
  })

  it('should submit', () => {
    form.find('form').simulate('submit');

    expect(onSubmitClick).toHaveBeenCalled();
  });

  describe('Redirect URIs', () => {
    it('should add a URI if a user clicks the "plus" button', () => {
      form.find('.uri-add').simulate('click');
      const state = store.getState();
      const formData = state.form.newApp.values;

      expect(formData.redirectUris.length).toBe(2);
    });

    it('should remove a URI if a user clicks on an input', () => {
      form.find('.uri-add').simulate('click');

      let state = store.getState();
      let formData = state.form.newApp.values;

      expect(formData.redirectUris.length).toBe(2);

      form.find('.uri-delete').simulate('click');

      state = store.getState();
      formData = state.form.newApp.values;

      expect(formData.redirectUris.length).toBe(1);
    });
  });

  describe('Terms of Agreement checkbox', () => {
    it('should render an error message if touched and unchecked', () => {
      const checkbox = form.find(CheckboxField);
      checkbox.find('input').simulate('blur');
      const errorMessage = checkbox.find(FieldError);

      expect(errorMessage.length).toBe(1);
      expect(errorMessage.text()).toBe('Terms of use agreement is required');
    });
  });
});
