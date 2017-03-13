import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { appListingRequest, appListingFailure, appListingSuccess, fetchAppListing } from '../../actions/appListing';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('fetchAppListing', () => {
  const apps = [
    appFactory('id-1'),
    appFactory('id-2'),
  ];
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appListingSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .get('/applications')
      .reply(200, apps);

    const expectedActions = [
      appListingRequest(),
      appListingSuccess(apps),
    ];

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appListingFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .get('/applications')
      .replyWithError('Server is down');

    const expectedActions = [
      appListingRequest(),
      appListingFailure(`request to ${process.env.DEVCENTER_API_FORMS}/applications failed, reason: Server is down`),
    ];

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
