import React from 'react';
import { shallow } from 'enzyme';

import NewTimeEntry from '../NewTimeEntry.tsx';

test('NewTimeEntry', () => {
  const newTimeEntry = shallow(<NewTimeEntry />);

  expect(newTimeEntry.state()).toEqual({
    isVisible: false,
    newTimeEntry: {
      activity: '',
      client: '',
      date: '',
      startTime: '',
      stopTime: ''
    },
    validity: {
      activity: true,
      client: true,
      date: true,
      startTime: true,
      stopTime: true
    }
  });
});

const addTimeEntry = () => {};

it('new time entry should render without crashing', () => {
  const wrapper = shallow(
    <NewTimeEntry
      onAddTimeEntry={addTimeEntry}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
