import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import AppPreview from '../../../components/AppListing/AppPreview';
import appFactory from '../../app.mock';

const app = appFactory('test-id');

describe('AppPreview', () => {
  it('should render to the page with a link to the app details page', () => {
    const appPreview = shallow(<AppPreview app={app} />);
    const link = appPreview.find(Link);

    expect(link.props().children).toEqual([app.name, ' ']);
    expect(link.props().to).toBe(`/details/${app.id}`);
  });
});
