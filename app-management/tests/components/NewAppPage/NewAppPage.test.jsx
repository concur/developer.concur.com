import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import NewAppPage from '../../../components/NewAppPage/NewAppPage';
import { mapStateToProps, mapDispatchToProps } from '../../../components/NewAppPage';
import NewAppForm from '../../../components/NewAppPage/NewAppForm';
import appReducer from '../../../reducers';

const store = createStore(appReducer);

describe('<NewAppPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with <NewAppForm />', () => {
    const props = {
      handleSubmit: jest.fn(),
      isFetching: false,
      error: '',
    };
    const page = shallow(<NewAppPage {...props} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns entire newApp state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().newApp);
    });
  });

  describe('mapDispatchToProps', () => {
    it('returns submit handler', () => {
      const dispatcher = jest.fn();
      const state = mapDispatchToProps(dispatcher);
      state.handleSubmit('app');

      expect(state.handleSubmit).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });
  });
});
