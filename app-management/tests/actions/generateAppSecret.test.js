import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  generateAppSecretRequest, generateAppSecretFailure, generateAppSecretSuccess,
  generateAppSecret,
} from '../../actions/generateAppSecret';
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

  it('creates an generateAppSecretSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .patch(`/applications/${app.id}/secret`)
      .reply(200, { application: app, clientSecret });

    const expectedActions = [
      generateAppSecretRequest(),
      generateAppSecretSuccess(app, clientSecret),
    ];

    return store.dispatch(generateAppSecret(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an generateAppSecretFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .patch(`/applications/${app.id}/secret`)
      .replyWithError('Server is down');

    const expectedActions = [
      generateAppSecretRequest(),
      generateAppSecretFailure(`request to ${process.env.DEVCENTER_API_FORMS}/applications/${app.id}/secret failed, reason: Server is down`),
    ];

    return store.dispatch(generateAppSecret(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
