import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

import Nav from '../../components/Nav';
import appReducer from '../../reducers';
import { loginSuccess } from '../../actions/auth';

// local storage mocks needed for login testing
import LocalStorage from '../localStorage.mock';
window.localStorage = LocalStorage();

const store = createStore(appReducer);

describe('Nav', () => {
  it('renders to the page via componentDidMount', () => {
    sinon.spy(Nav.prototype, 'componentDidMount');
    const page = mount(<Nav store={store} />);

    expect(Nav.prototype.componentDidMount.calledOnce).toBe(true);
  });

  it('renders signup and login links when the user is not authenticated', () => {
    const page = mount(<Nav store={store} />);
    const links = page.find(Link);

    expect(links.length).toBe(2);
    expect(links.first().props().to).toBe('/signup');
    expect(links.last().props().to).toBe('/login');
  });

  it('renders all other links when authenticated', () => {
    store.dispatch(loginSuccess('a-sample-token'));
    const page = mount(<Nav store={store} />);

    const links = page.find(Link);

    expect(links.length).toBe(3);
    expect(links.at(0).props().to).toBe('/');
    expect(links.at(1).props().to).toBe('/new');
    expect(links.at(2).props().to).toBe('/logout');
  });
});
