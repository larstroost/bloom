import React from 'react';
import { shallow } from 'enzyme';

import TimeEntry from '../TimeEntry.tsx';

const timeEntry = {
  client: 'Humanoids',
  startTime: '2018-08-18T07:00:00.000Z',
  stopTime: '2018-08-18T15:00:00.000Z',
  id: 1
};

const onDelete = () => {};

it('time entry should render without crashing', () => {
  const wrapper = shallow(
    <TimeEntry
      onDelete={onDelete}
      client={timeEntry.client}
      id={timeEntry.id}
      startTime={timeEntry.startTime}
      stopTime={timeEntry.stopTime}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
