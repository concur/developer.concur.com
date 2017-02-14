import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import SignupPage from '../../../components/SignupPage/SignupPage';
import { mapStateToProps, mapDispatchToProps } from '../../../components/SignupPage';
import SignupForm from '../../../components/SignupPage/SignupForm';
import appReducer from '../../../reducers';

const store = createStore(appReducer);

describe('<SignupPage />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render with <SignupForm />', () => {
    const handleSubmit = jest.fn();
    const page = shallow(<SignupPage handleSubmit={handleSubmit} isFetching={false} error="" />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns entire signup state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().signup);
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
