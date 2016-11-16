import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { createStore } from 'redux';

import AppDetailsPage from '../../../components/AppDetailsPage/AppDetailsPage';
import { mapStateToProps, mapDispatchToProps } from '../../../components/AppDetailsPage';
import AppEditForm from '../../../components/AppDetailsPage/AppEditForm';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ErrorAlert from '../../../components/ErrorAlert';
import appReducer from '../../../reducers';
import appFactory from '../../app.mock';

const store = createStore(appReducer);
const defaultProps = {
  fetchAppDetails: jest.fn(),
  isFetching: false,
  error: '',
  app: appFactory('id-1'),
  handleSubmit: jest.fn(),
  generateSecret: jest.fn(),
  showSecret: false,
  params: { id: 'id-1' }, // mock for React Router params
};

describe('<AppdetailsPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls componentWillMount to fetch the app details', () => {
    sinon.spy(AppDetailsPage.prototype, 'componentWillMount');
    const page = shallow(<AppDetailsPage {...defaultProps} />);

    expect(AppDetailsPage.prototype.componentWillMount.calledOnce).toBeTruthy();
    expect(defaultProps.fetchAppDetails).toHaveBeenCalled();
  });

  it('renders the app form', () => {
    const page = shallow(<AppDetailsPage {...defaultProps} />);

    expect(defaultProps.fetchAppDetails).toHaveBeenCalled();
    expect(page.find(AppEditForm).length).toBe(1);
  });

  it('displays the loading spinner if the details are loading', () => {
    const props = {
      ...defaultProps,
      isFetching: true,
    };

    const page = shallow(<AppDetailsPage {...props} />);
    const expectedSpinner = <LoadingSpinner loading={true} />;

    expect(page.containsMatchingElement(expectedSpinner)).toBeTruthy();
  });

  it('displays an error if the details failed to load', () => {
    const props = {
      ...defaultProps,
      error: 'Failed to fetch',
    };

    const page = shallow(<AppDetailsPage {...props} />);
    const expectedError = <ErrorAlert error={props.error} />;

    expect(page.containsMatchingElement(expectedError)).toBeTruthy();
  });

  describe('mapStateToProps', () => {
    it('returns entire appDetails state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().appDetails);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatcher = jest.fn();
    let state;

    beforeEach(() => {
      jest.clearAllMocks();
      state = mapDispatchToProps(dispatcher);
    });

    it('returns fetchAppDetails handler', () => {
      state.fetchAppDetails('app');

      expect(state.fetchAppDetails).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });

    it('returns submit handler', () => {
      state.handleSubmit('app');

      expect(state.handleSubmit).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });

    it('returns generateSecret handler', () => {
      state.generateSecret('app-id');

      expect(state.generateSecret).toBeDefined();
    });

    it('dispatches action if user confirms generateSecret', () => {
      window.confirm = () => true; // window.confirm mock
      state.generateSecret('app-id');

      expect(state.generateSecret).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });

    it('returns undefined if user confirms generateSecret', () => {
      window.confirm = () => false; // window.confirm mock
      const result = state.generateSecret('app-id');

      expect(state.generateSecret).toBeDefined();
      expect(result).toBeUndefined();
    });
  });
});
