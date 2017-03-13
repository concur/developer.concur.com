import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import { newAppRequest, newAppFailure, newAppSuccess, postNewApp } from '../../actions/newApp';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('postNewApp', () => {
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

  it('creates a newAppSuccess action when fetching is successful', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/applications')
      .reply(200, { app, clientSecret });

    const expectedActions = [
      newAppRequest(),
      newAppSuccess(app, clientSecret),
      reset('newApp'),
    ];

    return store.dispatch(postNewApp(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a newAppFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/applications')
      .replyWithError('Server is down');

    const expectedActions = [
      newAppRequest(),
      newAppFailure(`request to ${process.env.DEVCENTER_API_FORMS}/applications failed, reason: Server is down`),
    ];

    return store.dispatch(postNewApp(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
