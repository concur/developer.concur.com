import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  appDetailsRequest, appDetailsFailure, appDetailsSuccess, fetchAppDetails,
  appDetailsUpdateSuccess, updateAppDetails,
} from '../../actions/appDetails';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('fetchAppDetails', () => {
  const app = appFactory('id-1');
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appDetailsSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .get(`/`)
      .reply(200, app);

    const expectedActions = [
      appDetailsRequest(),
      appDetailsSuccess(app),
    ];

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appDetailsFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .get(`/`)
      .replyWithError('Server is down');

    const expectedActions = [
      appDetailsRequest(),
      appDetailsFailure(`request to ${process.env.DEVCENTER_API_ORCHESTRATION} failed, reason: Server is down`),
    ];

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('updateAppDetails', () => {
  const app = appFactory('id-1');
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appDetailsUpdateSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .put(`/`)
      .reply(200, app);

    const expectedActions = [
      appDetailsRequest(),
      appDetailsUpdateSuccess(app),
      appDetailsRequest(),
    ];

    return store.dispatch(updateAppDetails(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appDetailsFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .put(`/`)
      .replyWithError('Server is down');

    const expectedActions = [
      appDetailsRequest(),
      appDetailsFailure(`request to ${process.env.DEVCENTER_API_ORCHESTRATION} failed, reason: Server is down`),
    ];

    return store.dispatch(updateAppDetails(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
