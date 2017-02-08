import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import { newAppRequest, newAppFailure, newAppSuccess, postNewApp } from '../../actions/newApp';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('postNewApp', () => {
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
    const app = appFactory('id-1');

    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .post('/')
      .reply(200, app);

    const expectedActions = [
      newAppRequest(),
      newAppSuccess(app),
      reset('newApp'),
    ];

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a newAppFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .post('/')
      .replyWithError('Server is down');

    const expectedActions = [
      newAppRequest(),
      newAppFailure(`request to ${process.env.DEVCENTER_API_ORCHESTRATION} failed, reason: Server is down`),
    ];

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
