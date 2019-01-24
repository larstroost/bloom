import React from 'react';
import PropTypes from 'prop-types';

import './contact-form.scss';

class ContactForm extends React.Component {
  static initialState = {
    isBusiness: true,
    confirmation: false,
    contactForm: {
      companyName: '',
      contactName: '',
      email: '',
      phoneNumber: '',
      message: ''
    },
    validity: {
      companyName: true,
      contactName: true,
      email: true,
      phoneNumber: true,
      message: true
    }
  }

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = { ...ContactForm.initialState };

  checkInputValidity = (element) => element.validity.valid

  checkFormValidity = () => this.formRef.current
    && Array.from(this.formRef.current.elements).every(this.checkInputValidity);

  toggleBusinessPrivate = () => {
    this.setState((prevState) => ({
      isBusiness: !prevState.isBusiness
    }));
  };

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
      contactForm: {
        ...state.contactForm,
        [target.name]: target.value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://script.google.com/macros/s/AKfycbwfuYCQvZ9IJ31zi51P_VEt26BPRrHkcbmCubPJJg/exec', {
      method: 'POST',
      body: data,
    });
    this.setState({ ...ContactForm.initialState });
    this.setState(() => ({
      confirmation: true
    }));
  }

  confirmSendEmail = () => {
    this.setState(() => ({
      confirmation: false
    }));
  }

  render() {
    const { isBusiness, contactForm, validity, confirmation } = this.state;
    const {
      companyName,
      contactName,
      email,
      phoneNumber,
      message
    } = contactForm;
    return (
      <section className="contact-form">
        <div className="contact-form__button-wrapper">
          <button
            className={`
              contact-form__button
              contact-form__button--${ isBusiness ? 'highlighted' : 'dark'}
            `}
            onClick={this.toggleBusinessPrivate}
            type="button"
          >
            Zakelijk
          </button>
          <button
            className={`
              contact-form__button
              contact-form__button--${ isBusiness ? 'dark' : 'highlighted'}
            `}
            onClick={this.toggleBusinessPrivate}
            type="button"
          >
            Particulier
          </button>
        </div>
        <form
          className="gform contact-form__form"
          ref={this.formRef}
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="">
            {isBusiness && (
              <label
                className="contact-form__label"
                htmlFor="companyName"
              >
                Bedrijf
                <input
                  className={`
                    contact-form__input
                    contact-form__input--${validity.companyName ? '' : 'invalid'}
                  `}
                  id="companyName"
                  name="companyName"
                  placeholder="Bedrijf B.V."
                  required
                  title=""
                  type="text"
                  value={companyName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </label>
            )}

            <label
              className="contact-form__label"
              htmlFor="contactName"
            >
              Contactpersoon
              <input
                className={`
                  contact-form__input
                  contact-form__input--${validity.contactName ? '' : 'invalid'}
                `}
                id="contactName"
                name="contactName"
                placeholder="Jan Jansen"
                required
                title="Vul aub uw naam in"
                type="text"
                value={contactName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            <div className="contact-form__two-boxes-inline">
              <label
                className="contact-form__label"
                htmlFor="email"
              >
                Email
                <input
                  className={`
                    contact-form__input
                    contact-form__input--${validity.email ? '' : 'invalid'}
                  `}
                  id="email"
                  name="email"
                  placeholder="voorbeeld@voorbeeld.nl"
                  required
                  title=""
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </label>
              <label
                className="contact-form__label"
                htmlFor="phoneNumber"
              >
                Telefoonnummer
                <input
                  className={`
                    contact-form__input
                    contact-form__input--${validity.phoneNumber ? '' : 'invalid'}
                  `}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="06 1234 5678"
                  required
                  title=""
                  type="text"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </label>
            </div>
            <label
              className="contact-form__label"
              htmlFor="message"
            >
              Bericht
              <textarea
                className={`
                  contact-form__input
                  contact-form__input--message
                  contact-form__input--${validity.message ? '' : 'invalid'}
                `}
                id="message"
                name="message"
                placeholder="Vul hier uw bericht in."
                required
                title=""
                type="text"
                value={message}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
          </div>
          <button
            className={`
              contact-form__button
              contact-form__button--${this.checkFormValidity() ? 'highlighted' : 'dark'}
            `}
            type="submit"
          >
            Versturen
          </button>
        </form>
        {confirmation && (
          <div className="confirm">
            <p className="confirm__text">
              Bedankt voor uw bericht. We zullen zo spoedig mogelijk contact met u opnemen.
            </p>
            <button
              onClick={this.confirmSendEmail}
              type="button"
              className="confirm__button"
            >
              Akkoord
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default ContactForm;
