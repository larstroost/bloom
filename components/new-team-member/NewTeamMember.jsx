import React from 'react';
import PropTypes from 'prop-types';

import './new-team-member.scss';
import Button from '../../shared/components/button/Button';

class NewTeamMember extends React.Component {
  static initialState = {
    isVisible: false,
    newTeamMember: {
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      address: '',
      zip: '',
      city: '',
      twitter: '',
      facebook: ''
    },
    validity: {
      firstName: true,
      lastName: true,
      email: true,
      bio: true,
      address: true,
      zip: true,
      city: true,
      twitter: true,
      facebook: true
    }
  }

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = { ...NewTeamMember.initialState };

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
    const { newTeamMember } = this.state;
    if (this.checkFormValidity) {
      this.props.onAddTeamMember({
        firstName: newTeamMember.firstName,
        lastName: newTeamMember.lastName,
        email: newTeamMember.email,
        bio: newTeamMember.bio,
        address: newTeamMember.address,
        zip: newTeamMember.zip,
        city: newTeamMember.city,
        twitter: newTeamMember.twitter,
        facebook: newTeamMember.facebook
      });
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...NewTeamMember.initialState });
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
      newTeamMember: {
        ...state.newTeamMember,
        [target.name]: target.value
      }
    }));
  }

  render() {
    const { isVisible, newTeamMember, validity } = this.state;
    const {
      onHandleSortBy, onHandleSortDirection
    } = this.props;
    const {
      firstName,
      lastName,
      email,
      bio,
      address,
      zip,
      city,
      twitter,
      facebook
    } = newTeamMember;
    return (
      <section className="new-team-member">
        {!isVisible && (
          <div className="new-team-member__open-form-button-header">
            <p className="new-team-member__all-humanoids">
              All Humanoids
            </p>
            <div className="new-team-member__wrapper-sorting-open-form">
              <Button
                className="new-team-member__open-form"
                onClick={this.toggleForm}
                text="+ New Humanoid"
              />

              <select
                className="
                  new-team-member__button
                  new-team-member__button--sort
                "
                onChange={onHandleSortBy}
              >
                <option
                  value="lastName"
                  selected
                >
                  Last Name
                </option>
                <option
                  value="employeeNumber"
                >
                  Employee Number
                </option>
                <option
                  value="currentEmployer"
                >
                  Current Employer
                </option>
                <option
                  value="startingDate"
                >
                  Starting Date
                </option>
              </select>
              <select
                className="
                  new-team-member__button
                  new-team-member__button--sort
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
            new-team-member__form
            new-team-member__form--${isVisible ? 'open' : ''}
          `}
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className="new-team-member__wrapper-header">
            <div className="new-team-member__header">
              Add new team member
            </div>
            <div className="new-team-member__wrapper-save-cancel-buttons">
              <Button
                className="new-team-member__cancel"
                onClick={this.resetForm}
                text="Cancel"
              />
              <Button
                className={`
                  new-team-member__save
                  new-team-member__save--${this.checkFormValidity() ? 'valid' : 'invalid'}
                `}
                type="submit"
                text="Save"
                onClick=""
              />
            </div>
          </div>
          <div className="new-team-member__form-wrapper">
            <div className="new-team-member__form-tab">
              <div
                className="
                  new-team-member__form-tab
                  new-team-member__form-tab-personal-details
                "
              >
                Personal Details
              </div>
            </div>
            <div className="new-team-member__form-overview">
              <div className="new-team-member__avatar-section">
                <img
                  alt="ProfilePhoto"
                  className="new-team-member__profile-logo"
                  src="/static/icons/avatar.png"
                />
                <p className="new-team-member__edit-avatar">
                  Edit Avatar
                </p>
              </div>
              <div className="new-team-member__personal-section">
                <div
                  className="
                    new-team-member__two-boxes-inline
                    new-team-member__two-boxes-inline--tablet-margin
                  "
                >
                  <label
                    className="
                      new-team-member__label
                      new-team-member__label--half-left
                    "
                    htmlFor="firstName"
                  >
                    First Name
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${validity.firstName ? 'valid' : 'invalid'}
                      `}
                      id="firstName"
                      name="firstName"
                      placeholder="Niels"
                      required
                      title="Please submit your first name"
                      type="text"
                      value={firstName}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                  <label
                    className="
                      new-team-member__label
                      new-team-member__label--half-right
                    "
                    htmlFor="lastName"
                  >
                    Last Name
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${validity.lastName ? 'valid' : 'invalid'}
                      `}
                      id="lastName"
                      name="lastName"
                      placeholder="Brandhorst"
                      required
                      title="Please submit your last name"
                      type="text"
                      value={lastName}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                </div>
                <label
                  className="
                    new-team-member__label
                    new-team-member__label--tablet-margin
                  "
                  htmlFor="email"
                >
                  E-mail Address
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${validity.email ? 'valid' : 'invalid'}
                    `}
                    id="email"
                    name="email"
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder="niels.brandhorst@humanoids.nl"
                    required
                    title="Please submit your e-mail address"
                    type="text"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
                <label
                  className="new-team-member__label-last"
                  htmlFor="bio"
                  id="bio"
                >
                  Bio
                  <textarea
                    className={`
                      new-team-member__input-bio
                      new-team-member__input-bio--${validity.bio ? 'valid' : 'invalid'}
                    `}
                    id="bio"
                    name="bio"
                    placeholder="Your bio here"
                    required
                    title="Please submit your biography"
                    type="text"
                    value={bio}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                </label>
              </div>
              <div className="new-team-member__address-section">
                <label
                  className="new-team-member__label"
                  htmlFor="address"
                >
                  Address
                  <input
                    className={`
                      new-team-member__input
                      new-team-member__input--${validity.address ? 'valid' : 'invalid'}
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
                <div className="new-team-member__two-boxes-inline">
                  <label
                    className="
                      new-team-member__label
                      new-team-member__label--half-left
                    "
                    htmlFor="zip"
                  >
                    ZIP code
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${validity.zip ? 'valid' : 'invalid'}
                      `}
                      id="zip"
                      name="zip"
                      placeholder="2521 CJ"
                      required
                      title="Please submit your ZIP code"
                      type="text"
                      value={zip}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                  <label
                    className="
                      new-team-member__label
                      new-team-member__label--half-right
                    "
                    htmlFor="city"
                  >
                    City
                    <input
                      className={`
                        new-team-member__input
                        new-team-member__input--${validity.city ? 'valid' : 'invalid'}
                      `}
                      id="city"
                      name="city"
                      placeholder="Rotterdam"
                      required
                      title="Please submit the city you live in"
                      type="text"
                      value={city}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </label>
                </div>
                <label
                  className="new-team-member__label-last"
                  htmlFor="twitter"
                >
                  Social Profiles
                  <div className="new-team-member__wrapper-for-social-media">
                    <div
                      className="
                        new-team-member__icon
                        new-team-member__icon--twitter
                      "
                    >
                      <img
                        src="static/icons/twitter.svg"
                        className="new-team-member__social-media-icons"
                        alt="twitter logo"
                      />
                    </div>
                    <input
                      className={`
                        new-team-member__input-social-media
                        new-team-member__input-social-media--${validity.twitter ? 'valid' : 'invalid'}
                      `}
                      id="twitter"
                      name="twitter"
                      placeholder="@nbrandhorst"
                      required
                      title="Please submit your twitter handle"
                      type="text"
                      value={twitter}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                  </div>
                  <div className="new-team-member__wrapper-for-social-media">
                    <div
                      className="
                        new-team-member__icon
                        new-team-member__icon--facebook
                      "
                    >
                      <img
                        src="static/icons/facebook.svg"
                        className="new-team-member__social-media-icons"
                        alt="facebook logo"
                      />
                    </div>
                    <input
                      className={`
                        new-team-member__input-social-media
                        new-team-member__input-social-media--${validity.facebook ? 'valid' : 'invalid'}
                      `}
                      id="facebook"
                      name="facebook"
                      placeholder="nielsbrandhorst"
                      required
                      title="Please submit your facebook handle"
                      type="text"
                      value={facebook}
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

NewTeamMember.propTypes = {
  onAddTeamMember: PropTypes.func.isRequired,
  onHandleSortBy: PropTypes.func.isRequired,
  onHandleSortDirection: PropTypes.func.isRequired
};

export default NewTeamMember;
