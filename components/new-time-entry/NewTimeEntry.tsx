import React from 'react';

import './new-time-entry.scss';
import dateToIsoDate from '../../services/date-to-iso-date/date-to-iso-date';
import { TimeEntryModel } from '../../ducks/time-entries';
import { ClientModel } from '../../ducks/clients';

interface NewTimeEntryProps {
  onAddTimeEntry: (newTimeEntry: TimeEntryModel) => void;
  clients: ClientModel[];
}

interface NewTimeEntryState {
  isVisible: boolean;
  newTimeEntry: TimeEntryModel
  validity: {
    activity: boolean;
    clientId: boolean;
    date: boolean;
    startTime: boolean;
    stopTime: boolean;
  };
}

class NewTimeEntry extends React.Component<NewTimeEntryProps, NewTimeEntryState> {
  static initialState: NewTimeEntryState = {
    isVisible: false,
    newTimeEntry: {
      activity: '',
      clientId: '',
      date: '',
      startTime: '',
      stopTime: ''
    },
    validity: {
      activity: true,
      clientId: true,
      date: true,
      startTime: true,
      stopTime: true
    }
  }

  private formRef = React.createRef<HTMLFormElement>()

  state = { ...NewTimeEntry.initialState }

  checkInputValidity = (element) => element.validity.valid

  checkFormValidity = () => this.formRef.current
    && Array.from(this.formRef.current.elements).every(this.checkInputValidity);

  toggleNewEntry = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTimeEntry } = this.state;
    if (this.checkFormValidity) {
      this.props.onAddTimeEntry({
        activity: newTimeEntry.activity,
        clientId: newTimeEntry.clientId,
        startTime: dateToIsoDate(newTimeEntry.date, newTimeEntry.startTime),
        stopTime: dateToIsoDate(newTimeEntry.date, newTimeEntry.stopTime)
      });
    }
    this.resetForm();
  };

  handleChange = ({ target }) => {
    this.setState((state) => ({
      newTimeEntry: {
        ...state.newTimeEntry,
        [target.name]: target.value
      }
    }));
  }

  handleBlur = ({ target }) => {
    this.setState((state) => ({
      validity: {
        ...state.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  resetForm = () => {
    this.setState({ ...NewTimeEntry.initialState });
  }

  render() {
    const { isVisible, newTimeEntry, validity } = this.state;
    const {
      activity, clientId, date, startTime, stopTime
    } = newTimeEntry;
    return (
      <section className="new-time-entry">
        {!isVisible && (
          <button
            className="new-time-entry__button"
            onClick={this.toggleNewEntry}
            type="button"
          >
            +  New time entry
          </button>
        )}
        <h1 className="new-time-entry-header">
          New time entry
        </h1>
        <form
          ref={this.formRef}
          className={`
            new-entry-form
            ${isVisible ? 'new-entry-form--open' : ''}
          `}
          onSubmit={this.handleSubmit}
        >
          <label
            className="new-entry-form__label new-entry-form__label--full"
            htmlFor="clientId"
          >
            EMPLOYER
            <select
              className={`
                new-entry-form__input
                new-entry-form__input--full
                new-entry-form__input--${validity.clientId ? 'valid' : 'invalid'}
              `}
              id="clientId"
              name="clientId"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              required
              title="Please submit an employer"
              value={clientId}
            >
              <option
                disabled
                value=""
              >
                Pick an employer
              </option>
              {this.props.clients.map(({ name, id }) => (
                <option
                  value={id}
                  key={id}
                >
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label
            className="new-entry-form__label new-entry-form__label--full"
            htmlFor="activity"
          >
            ACTIVITY
            <input
              className={`
                new-entry-form__input
                new-entry-form__input--full
                new-entry-form__input--${validity.activity ? 'valid' : 'invalid'}
              `}
              id="activity"
              name="activity"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder="Design"
              required
              title="Please submit an activity"
              type="text"
              value={activity}
            />
          </label>
          <label
            className="new-entry-form__label new-entry-form__label--half"
            htmlFor="date"
          >
            DATE
            <input
              className={`
                new-entry-form__input
                new-entry-form__input--half
                new-entry-form__input--${validity.date ? 'valid' : 'invalid'}
              `}
              id="date"
              name="date"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              pattern="[0-3]{1}[0-9]{1}[-]{1}[0-1]{1}[0-9]{1}[-]{1}[2]{1}[0-9]{3}"
              placeholder="29-07-2018"
              required
              title="DD-MM-YYYY"
              type="text"
              value={date}
            />
          </label>
          <div className="two-boxes-inline">
            <label
              className="new-entry-form__label new-entry-form__label--quarter"
              htmlFor="startTime"
            >
              FROM
              <input
                className={`
                  new-entry-form__input
                  new-entry-form__input--quarter
                  new-entry-form__input--${validity.startTime ? 'valid' : 'invalid'}
                `}
                id="startTime"
                name="startTime"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                pattern="^(?:0?[0-9]|1[0-9]|2[0-3])[./:][0-5][0-9]"
                placeholder="9:00"
                required
                title="HH:MM"
                type="text"
                value={startTime}
              />
            </label>
            <label
              className="new-entry-form__label new-entry-form__label--quarter"
              htmlFor="stopTime"
            >
              TO
              <input
                className={`
                  new-entry-form__input
                  new-entry-form__input--quarter
                  new-entry-form__input--${validity.stopTime ? 'valid' : 'invalid'}
                `}
                id="stopTime"
                name="stopTime"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                pattern="^(?:0?[0-9]|1[0-9]|2[0-3])[./:][0-5][0-9]"
                placeholder="17:00"
                required
                title="HH:MM"
                type="text"
                value={stopTime}
              />
            </label>
          </div>
          <button
            className={`
              new-entry-form__add-button
              new-entry-form__add-button--${this.checkFormValidity() ? 'valid' : 'invalid'}
            `}
            type="submit"
          >
            Add
          </button>
          <button
            className="new-entry-form__close-button"
            onClick={this.resetForm}
            type="button"
          />
        </form>
      </section>
    );
  }
}

export default NewTimeEntry;
