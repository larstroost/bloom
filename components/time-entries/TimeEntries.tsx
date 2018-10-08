import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import PageHeader from '../page-header/PageHeader';
import './time-entries.scss';
import NewTimeEntry from '../new-time-entry/NewTimeEntry';
import calculateDuration from '../../services/calculate-duration/calculate-duration';
import { TimeEntryModel } from '../../ducks/time-entries';
import { ClientModel } from '../../ducks/clients';

interface TimeEntriesProps {
  timeEntries: TimeEntryModel[],
  addNewTimeEntry;
  deleteTimeEntry;
  requestClients;
  requestTimeEntries;
  changeActiveFilter;
  returnToDefault;
  clients: ClientModel[];
}

class TimeEntries extends React.Component<TimeEntriesProps, null> {
  componentDidMount() {
    this.props.requestTimeEntries();
    this.props.returnToDefault();
    this.props.requestClients();
  }

  onDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this time entry?');
    if (result) {
      this.props.deleteTimeEntry(id);
    }
  };

  addTimeEntries = (newTimeEntry) => {
    this.props.addNewTimeEntry(newTimeEntry);
  };

  calculateTotalTime = (timeEntry) => this.props.timeEntries
    .filter((item) => new Date(item.startTime).toLocaleDateString()
      === new Date(timeEntry.startTime).toLocaleDateString())
    .reduce((accumulator, item) => accumulator
      + calculateDuration(item.startTime, item.stopTime), 0)

  render() {
    const { timeEntries, changeActiveFilter } = this.props;
    return (
      <React.Fragment>
        <PageHeader
          title="Timesheets"
          subtitle="12 Entries"
          onChangeActiveFilter={changeActiveFilter}
          options={this.props.clients}
          standardOption="All Clients"
        />
        <NewTimeEntry
          onAddTimeEntry={this.addTimeEntries}
          clients={this.props.clients}
        />
        {timeEntries.map((timeEntry, index) => (
          <React.Fragment key={timeEntry.id}>
            {(index === 0
              || new Date(timeEntries[index - 1].startTime).toLocaleDateString()
              !== new Date(timeEntry.startTime).toLocaleDateString()) && (
              <div className="time-entries-bundling-stamp">
                <p className="time-entries-bundling-stamp__date">
                  {new Date(timeEntry.startTime).toLocaleDateString('en-NL', { weekday: 'long', month: '2-digit', day: '2-digit' })}
                </p>
                <p className="time-entries-bundling-stamp__total-hours">
                  {this.calculateTotalTime(timeEntry)}
                </p>
              </div>
            )}
            <TimeEntry
              onDelete={this.onDelete}
              timeEntry={timeEntry}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default TimeEntries;
