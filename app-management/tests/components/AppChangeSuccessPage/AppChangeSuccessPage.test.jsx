import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import AppChangeSuccessPage from '../../../components/AppChangeSuccessPage/AppChangeSuccessPage';
import { mapStateToProps } from '../../../components/AppChangeSuccessPage';
import appReducer from '../../../reducers';
import appFactory from '../../app.mock';

const store = createStore(appReducer);

describe('<AppChangeSuccessPage />', () => {
  it('should render a not found page if no app or clientSecret are provided', () => {
    const app = {};
    const clientSecret = '';
    const page = shallow(<AppChangeSuccessPage app={app} clientSecret={clientSecret} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('should render the app clientId, clientSecret, and name if provided', () => {
    const app = appFactory('test-id');
    const clientSecret = 'a-client-secret';
    const page = shallow(<AppChangeSuccessPage app={app} clientSecret={clientSecret} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns entire appChange state', () => {
      const state = mapStateToProps(store.getState());

      expect(state).toEqual(store.getState().appChange);
    });
  });
});
