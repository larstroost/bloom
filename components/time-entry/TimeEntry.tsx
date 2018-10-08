import React from 'react';

import './time-entry.scss';
import { TimeEntryModel } from '../../ducks/time-entries';

const isoToLocale = (time) => new Date(time).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

interface TimeEntryProps {
  timeEntry: TimeEntryModel;
  onDelete;
}

class TimeEntry extends React.Component<TimeEntryProps> {
  static defaultProps = {
    clientName: 'Client Unknown'
  }

  render () {
    const { clientName, id, stopTime, startTime } = this.props.timeEntry
    return (
      <section className="time-entry">
        <div className="single-time-entry">
          <div className="single-time-entry__wrapper-client-delete">
            <p className="single-time-entry__client">
              {clientName}
            </p>
            <button
              className="single-time-entry__delete"
              type="button"
              onClick={() => this.props.onDelete(id)}
            >
              Delete
              <div className="single-time-entry__forbidden-icon" />
            </button>
          </div>
          <div>
            <p className="single-time-entry__hours">
              {isoToLocale(startTime)} - {isoToLocale(stopTime)}
            </p>
            <p className="single-time-entry__hours-worked">
              {isoToLocale((Date.parse(stopTime)
                - Date.parse(startTime))
                - 1 * 1000 * 60 * 60)}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default TimeEntry;
