import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import LoginPage from '../../../components/LoginPage/LoginPage';
import { mapStateToProps, mapDispatchToProps } from '../../../components/LoginPage';
import appReducer from '../../../reducers';

const store = createStore(appReducer);

describe('<LoginPage />', () => {
  it('should render with <LoginForm />', () => {
    const handleSubmit = jest.fn();
    const page = shallow(<LoginPage handleSubmit={handleSubmit} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns entire auth state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().auth);
    });
  });

  describe('mapDispatchToProps', () => {
    it('returns submit handler', () => {
      const dispatcher = jest.fn();
      const state = mapDispatchToProps(dispatcher);
      state.handleSubmit('user');

      expect(state.handleSubmit).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });
  });
});
