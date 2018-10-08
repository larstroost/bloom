import React from 'react';
import PropTypes from 'prop-types';

import './new-client.scss';
import Button from '../../shared/components/button/Button';

class NewClient extends React.Component {
  static initialState = {
    isVisible: false,
    newClient: {
      clientName: '',
      kvkNumber: '',
      remarks: '',
      address: '',
      zip: '',
      city: '',
      phoneNumber: '',
      email: '',
      website: ''
    },
    validity: {
      clientName: true,
      kvkNumber: true,
      remarks: true,
      address: true,
      zip: true,
      city: true,
      phoneNumber: true,
      email: true,
      website: true
    }
  }

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = { ...NewClient.initialState };

  checkInputValidity = (element) => element.validity.valid

  checkFormValidity = () => this.formRef.current
    && Array.from(this.formRef.current.elements).every(this.checkInputValidity);

  toggleForm = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newClient } = this.state;
    if (this.checkFormValidity) {
      this.props.onAddClient({
        clientName: newClient.clientName,
        kvkNumber: newClient.kvkNumber,
        remarks: newClient.remarks,
        address: newClient.address,
        zip: newClient.zip,
        city: newClient.city,
        phoneNumber: newClient.phoneNumber,
        email: newClient.email,
        website: newClient.website
      });
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...NewClient.initialState });
  }

  handleBlur = ({ target }) => {
    this.setState((state) => ({
      validity: {
        ...state.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  handleChange = ({ target }) => {
    this.setState((state) => ({
      newClient: {
        ...state.newClient,
        [target.name]: target.value
      }
    }));
  }

  render() {
    const { isVisible, newClient, validity } = this.state;
    const {
      onHandleSortBy, onHandleSortDirection
    } = this.props;
    const {
      clientName,
      kvkNumber,
      remarks,
      address,
      zip,
      city,
      phoneNumber,
      email,
      website
    } = newClient;
    return (
      <section className="new-client">
        {!isVisible && (
          <div className="new-client__open-form-button-header">
            <p className="new-client__all-clients">
              All Clients
            </p>
            <div className="new-client__wrapper-sorting-open-form">
              <Button
                className="new-client__open-form"
                onClick={this.toggleForm}
                text="+ New Client"
              />
              <select
                className="
                  new-client__button
                  new-client__button--sort
                "
                onChange={onHandleSortBy}
              >
                <option
                  value="clientName"
                  selected
                >
                  Client Name
                </option>
                <option
                  value="city"
                >
                  City
                </option>
              </select>
              <select
                className="
                  new-client__button
                  new-client__button--sort
                "
                onChange={onHandleSortDirection}
              >
                <option
                  value="ascending"
                >
                  Ascending
                </option>
                <option
                  value="descending"
                >
                  Descending
                </option>
              </select>
            </div>
          </div>
        )}
        <form
          className={`
            new-client__form
            new-client__form--${isVisible ? 'open' : ''}
          `}
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className="new-client__wrapper-header">
            <div className="new-client__header">
              Add new client
            </div>
            <div className="new-client__wrapper-save-cancel-buttons">
              <Button
                className="new-client__cancel"
                onClick={this.resetForm}
                text="Cancel"
              />
              <Button
                className={`
                  new-client__save
                  new-client__save--${this.checkFormValidity() ? 'valid' : 'invalid'}
                `}
                onClick=""
                type="submit"
                text="Save"
              />
            </div>
          </div>
          <div className="new-client__form-wrapper">
            <div className="new-client__form-tab">
              <div
                className="
                  new-client__form-tab
                  new-client__form-tab-client-details
                "
              >
                Client Details
              </div>
            </div>
            <div className="new-client__form-overview">
              <div className="new-client__client-logo-section">
                <img
                  alt="Client Logo"
                  className="new-client__client-logo"
                  src="/static/icons/humanoids-logo-small.jpg"
                />
                <p className="new-client__edit-client-logo">
                  Edit Client Logo
                </p>
              </div>
              <div className="new-client__company-info-section">
                <label
                  className="
                    new-client__label
                    new-client__label--tablet-margin
                  "
                  htmlFor="clientName"
                >
                  Client Name
                  <input
                    className={`
                      new-client__input
                      new-client__input--${validity.clientName ? 'valid' : 'invalid'}
                    `}
                    id="clientName"
                    name="clientName"
                    placeholder="Humanoids"
                    required
                    title="Please submit your first name"
                    type="text"
                    value={clientName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
                <label
                  className="
                    new-client__label
                    new-client__label--tablet-margin
                  "
                  htmlFor="kvkNumber"
                >
                  KVK Number
                  <input
                    className={`
                      new-client__input
                      new-client__input--${validity.kvkNumber ? 'valid' : 'invalid'}
                    `}
                    id="kvkNumber"
                    name="kvkNumber"
                    placeholder="69529760"
                    required
                    title="Please submit your KVK number"
                    type="text"
                    value={kvkNumber}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
                <label
                  className="new-client__label-last"
                  htmlFor="remarks"
                  id="remarks"
                >
                  Bio
                  <textarea
                    className={`
                      new-client__input-remarks
                      new-client__input-remarks--${validity.remarks ? 'valid' : 'invalid'}
                    `}
                    id="remarks"
                    name="remarks"
                    placeholder="Ceterum censeo Carthaginem esse delendam"
                    required
                    title="Please submit your remarks"
                    type="text"
                    value={remarks}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
              </div>
              <div className="new-client__contact-section">
                <label
                  className="new-client__label"
                  htmlFor="address"
                >
                  Address
                  <input
                    className={`
                      new-client__input
                      new-client__input--${validity.address ? 'valid' : 'invalid'}
                    `}
                    id="address"
                    name="address"
                    placeholder="Waldorpstraat 27"
                    required
                    title="Please submit your address"
                    type="text"
                    value={address}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
                <div className="new-client__two-boxes-inline">
                  <label
                    className="
                      new-client__label
                      new-client__label--half
                    "
                    htmlFor="zip"
                  >
                    ZIP code
                    <input
                      className={`
                        new-client__input
                        new-client__input--${validity.zip ? 'valid' : 'invalid'}
                      `}
                      id="zip"
                      name="zip"
                      placeholder="2521 CJ"
                      required
                      title="Please submit the company's ZIP code"
                      type="text"
                      value={zip}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                  <label
                    className="
                      new-client__label
                      new-client__label--half
                    "
                    htmlFor="city"
                  >
                    City
                    <input
                      className={`
                        new-client__input
                        new-client__input--${validity.city ? 'valid' : 'invalid'}
                      `}
                      id="city"
                      name="city"
                      placeholder="Rotterdam"
                      required
                      title="Please submit the city the company's headquarter is placed in"
                      type="text"
                      value={city}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                </div>
                <label
                  className="new-client__label-last"
                  htmlFor="phoneNumber"
                >
                  Contact Details
                  <div className="new-client__wrapper-for-contact-details">
                    <div
                      className="
                        new-client__icon
                        new-client__icon--phone
                      "
                    >
                      <img
                        src="static/icons/phone.svg"
                        className="new-client__contact-icons"
                        alt="phone icon"
                      />
                    </div>
                    <input
                      className={`
                        new-client__input-contact-details
                        new-client__input-contact-details--${validity.phoneNumber ? 'valid' : 'invalid'}
                      `}
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="0634561860"
                      required
                      title="Please submit your phone number"
                      type="text"
                      value={phoneNumber}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </div>
                  <div className="new-client__wrapper-for-contact-details">
                    <div
                      className="
                        new-client__icon
                        new-client__icon--mail
                      "
                    >
                      <img
                        src="static/icons/envelope.svg"
                        className="new-client__contact-icons"
                        alt="email icon"
                      />
                    </div>
                    <input
                      className={`
                        new-client__input-contact-details
                        new-client__input-contact-details--${validity.email ? 'valid' : 'invalid'}
                      `}
                      id="email"
                      name="email"
                      placeholder="lars.troost@humanoids.nl"
                      required
                      title="Please submit your email"
                      type="text"
                      value={email}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </div>
                  <div className="new-client__wrapper-for-contact-details">
                    <div
                      className="
                        new-client__icon
                        new-client__icon--mail
                      "
                    >
                      <img
                        src="static/icons/globe.svg"
                        className="new-client__contact-icons"
                        alt="internet icon"
                      />
                    </div>
                    <input
                      className={`
                        new-client__input-contact-details
                        new-client__input-contact-details--${validity.website ? 'valid' : 'invalid'}
                      `}
                      id="website"
                      name="website"
                      placeholder="www.humanoids.nl"
                      required
                      title="Please submit your website"
                      type="text"
                      value={website}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

NewClient.propTypes = {
  onAddClient: PropTypes.func.isRequired,
  onHandleSortBy: PropTypes.func.isRequired,
  onHandleSortDirection: PropTypes.func.isRequired
};

export default NewClient;
