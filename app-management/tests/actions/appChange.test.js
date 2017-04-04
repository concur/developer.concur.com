import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import { appChangeRequest, appChangeFailure, appChangeSuccess, generateAppSecret, postApp } from '../../actions/appChange';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('generateAppSecret', () => {
  const app = appFactory('id-1');
  const clientSecret = 'a-client-secret';
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appChangeSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .patch(`/applications/${app.id}/secret`)
      .reply(200, { application: app, clientSecret });

    const expectedActions = [
      appChangeRequest(),
      appChangeSuccess(app, clientSecret),
    ];

    return store.dispatch(generateAppSecret(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appChangeFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .patch(`/applications/${app.id}/secret`)
      .replyWithError('Server is down');

    const expectedActions = [
      appChangeRequest(),
      appChangeFailure(`request to ${process.env.DEVCENTER_API_FORMS}/applications/${app.id}/secret failed, reason: Server is down`),
    ];

    return store.dispatch(generateAppSecret(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('postApp', () => {
  const app = appFactory('id-1');
  const clientSecret = 'a-client-secret';
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  })

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a appChangeSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/applications')
      .reply(200, { application: app, clientSecret });

    const expectedActions = [
      appChangeRequest(),
      appChangeSuccess(app, clientSecret),
      reset('newApp'),
    ];

    return store.dispatch(postApp(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a appChangeFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/applications')
      .replyWithError('Server is down');

    const expectedActions = [
      appChangeRequest(),
      appChangeFailure(`request to ${process.env.DEVCENTER_API_FORMS}/applications failed, reason: Server is down`),
    ];

    return store.dispatch(postApp(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
