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
  appChange: {
    error: '',
    isFetching: false,
  },
  appDetails: {
    app: appFactory('id-1'),
    error: '',
    isFetching: false,
  },
  appSecret: {
    app: {},
    clientSecret: '',
    error: '',
    isFetching: false,
  },
  fetchAppDetails: jest.fn(),
  generateSecretHandler: jest.fn(),
  putAppHandler: jest.fn(),
  params: { id: 'id-1' }, // mock for React Router params
};

describe('<AppdetailsPage />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
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
      appDetails: {
        ...defaultProps.appDetails,
        isFetching: true,
      },
    };

    const page = shallow(<AppDetailsPage {...props} />);
    const expectedSpinner = <LoadingSpinner loading={true} />;

    expect(page.containsMatchingElement(expectedSpinner)).toBeTruthy();
  });

  it('displays an error if the details failed to load', () => {
    const props = {
      ...defaultProps,
      appDetails: {
        ...defaultProps.appDetails,
        error: 'Failed to fetch',
      },
    };

    const page = shallow(<AppDetailsPage {...props} />);
    const expectedError = <ErrorAlert error={props.appDetails.error} />;

    expect(page.containsMatchingElement(expectedError)).toBeTruthy();
  });

  describe('mapStateToProps', () => {
    it('returns entire appDetails and appSecret states', () => {
      const state = mapStateToProps(store.getState());

      expect(state.appDetails).toEqual(store.getState().appDetails);
      expect(state.appSecret).toEqual(store.getState().appSecret);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatcher = jest.fn();
    let state;

    beforeEach(() => {
      jest.resetAllMocks();
      state = mapDispatchToProps(dispatcher);
    });

    it('returns fetchAppDetails handler', () => {
      state.fetchAppDetails('app-id');

      expect(state.fetchAppDetails).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });

    it('returns submit handler', () => {
      state.generateSecretHandler('app-id');

      expect(state.generateSecretHandler).toBeDefined();
      expect(dispatcher).toHaveBeenCalled();
    });
  });
});
