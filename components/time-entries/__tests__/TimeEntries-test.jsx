import React from 'react';
import { shallow } from 'enzyme';

import TimeEntries from '../TimeEntries.tsx';

const requestTimeEntries = () => {};
const deleteTimeEntry = () => {};
const addNewTimeEntry = () => {};
const timeEntries = [
  {
    activity: 'Developing',
    client: 'Humanoids',
    startTime: '2018-08-18T07:00:00.000Z',
    stopTime: '2018-08-18T15:00:00.000Z',
    id: 1
  }
];

it('time entries should render without crashing', () => {
  const wrapper = shallow(
    <TimeEntries
      onAddTimeEntry={addNewTimeEntry}
      onDelete={deleteTimeEntry}
      timeEntries={timeEntries}
      requestTimeEntries={requestTimeEntries}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
