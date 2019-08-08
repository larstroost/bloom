import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

import './contact-form.scss';

class ContactForm extends React.Component {
  static initialState = {
    isBusiness: true,
    confirmation: false,
    contactForm: {
      bedrijfsnaam: '',
      contactpersoon: '',
      email: '',
      telefoonnummer: '',
      bericht: '',
    },
    validity: {
      bedrijfsnaam: true,
      contactpersoon: true,
      email: true,
      telefoonnummer: true,
      bericht: true
    },
    recaptcha: false
  }

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  state = { ...ContactForm.initialState };

  checkInputValidity = (element) => element.validity.valid

  checkFormValidity = () => this.formRef.current
    && Array.from(this.formRef.current.elements).every(this.checkInputValidity)
    && this.state.recaptcha === true;

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
    if (this.state.recaptcha) {
      fetch('https://script.google.com/macros/s/AKfycbx-w9tUQsFZZmKAUZSSZKJZakKAjsvSvjAvokfOyLE6aSkvWjFq/exec', {
        method: 'POST',
        body: data,
      });
      this.setState({ ...ContactForm.initialState });
      this.setState(() => ({
        confirmation: true
      }));
    } else {
      alert('Vink alsjeblieft aan dat je geen robot bent.');
    }
  }

  recaptchaLoaded = () => {
    console.log('recaptcha loaded');
  }

  verifyCallback = (response) => {
    if (response) {
      console.log('verified')
      this.setState(() => ({
        recaptcha: true
      }));
    }
  }

  confirmSendEmail = () => {
    this.setState(() => ({
      confirmation: false
    }));
  }

  render() {
    const { isBusiness, contactForm, validity, confirmation } = this.state;
    const {
      bedrijfsnaam,
      contactpersoon,
      email,
      telefoonnummer,
      bericht
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
                htmlFor="bedrijfsnaam"
              >
                Bedrijf
                <input
                  className={`
                    contact-form__input
                    contact-form__input--${validity.bedrijfsnaam ? '' : 'invalid'}
                  `}
                  id="bedrijfsnaam"
                  name="bedrijfsnaam"
                  placeholder="Bedrijf B.V."
                  required
                  title=""
                  type="text"
                  value={bedrijfsnaam}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </label>
            )}

            <label
              className="contact-form__label"
              htmlFor="contactpersoon"
            >
              Contactpersoon
              <input
                className={`
                  contact-form__input
                  contact-form__input--${validity.contactpersoon ? '' : 'invalid'}
                `}
                id="contactpersoon"
                name="contactpersoon"
                placeholder="Jan Jansen"
                required
                title="Vul aub uw naam in"
                type="text"
                value={contactpersoon}
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
                htmlFor="telefoonnummer"
              >
                Telefoonnummer
                <input
                  className={`
                    contact-form__input
                    contact-form__input--${validity.telefoonnummer ? '' : 'invalid'}
                  `}
                  id="telefoonnummer"
                  name="telefoonnummer"
                  placeholder="06 1234 5678"
                  required
                  title=""
                  type="text"
                  value={telefoonnummer}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </label>
            </div>
            <label
              className="contact-form__label"
              htmlFor="bericht"
            >
              Bericht
              <textarea
                className={`
                  contact-form__input
                  contact-form__input--message
                  contact-form__input--${validity.bericht ? '' : 'invalid'}
                `}
                id="bericht"
                name="bericht"
                placeholder="Vul hier uw bericht in."
                required
                title=""
                type="text"
                value={bericht}
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
        <Recaptcha
           sitekey="6LeDBp4UAAAAAHmHHFKXGR7h1WVjqsbYLtcdkDYs"
           render="explicit"
           onloadCallback={this.recaptchaLoaded}
           verifyCallback={this.verifyCallback}
         />
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
