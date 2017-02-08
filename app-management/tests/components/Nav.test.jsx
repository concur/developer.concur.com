import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { createStore } from 'redux';
import { shallowToJson } from 'enzyme-to-json';

import Nav from '../../components/Nav/Nav';
import { mapStateToProps } from '../../components/Nav';
import appReducer from '../../reducers';

const store = createStore(appReducer);

describe('<Nav />', () => {
  it('renders signup and login links when the user is not authenticated', () => {
    const page = shallow(<Nav authenticated={false} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('renders all other links when authenticated', () => {
    const page = shallow(<Nav authenticated={true} />);

    expect(shallowToJson(page)).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('returns authenticated state', () => {
      const state = mapStateToProps(store.getState());

      expect(state.authenticated).toBeDefined();
    });
  });
});
