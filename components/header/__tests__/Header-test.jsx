import React from 'react';
import { shallow } from 'enzyme';

import MainNav from '../Header';

it('header should render without crashing', () => {
  const wrapper = shallow(<MainNav />);

  expect(wrapper).toMatchSnapshot();
});
