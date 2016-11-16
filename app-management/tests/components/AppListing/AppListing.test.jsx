import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import AppListing from '../../../components/AppListing/AppListing';
import { mapStateToProps, mapDispatchToProps } from '../../../components/AppListing';
import AppPreview from '../../../components/AppListing/AppPreview';
import appReducer from '../../../reducers';
import appFactory from '../../app.mock';

const store = createStore(appReducer);

const defaultProps = {
  fetchAppListing: jest.fn(),
  isFetching: false,
  error: '',
  apps: [],
};

describe('<AppListing />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls componentWillMount to fetch the app listing', () => {
    sinon.spy(AppListing.prototype, 'componentWillMount');
    const listing = shallow(<AppListing {...defaultProps} />);

    expect(AppListing.prototype.componentWillMount.calledOnce).toBeTruthy();
    expect(defaultProps.fetchAppListing).toHaveBeenCalled();
  });

  it('renders apps', () => {
    const apps = [
      appFactory('id-1'),
      appFactory('id-2'),
    ];
    const props = {
      ...defaultProps,
      apps,
    };
    const listing = shallow(<AppListing {...props} />);

    expect(shallowToJson(listing)).toMatchSnapshot();
  });

  it('displays the loading spinner if the listing is loading', () => {
    const props = {
      ...defaultProps,
      isFetching: true,
    };
    const listing = shallow(<AppListing {...props} />);

    expect(shallowToJson(listing)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns entire appListing state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().appListing);
    });
  });

  describe('mapDispatchToProps', () => {
    it('returns submit handler', () => {
      const dispatcher = jest.fn();
      const state = mapDispatchToProps(dispatcher);
      state.fetchAppListing();

      expect(state.fetchAppListing).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });
  });
});
