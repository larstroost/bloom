import React from 'react';
import PropTypes from 'prop-types';

import './client.scss';

class Client extends React.Component {
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      clientName,
      city,
      phoneNumber,
      email,
      website,
      address,
      zip,
      kvkNumber,
      remarks
    } = this.props;
    return (
      <div
        className="client"
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div
          className={`
            client__basic-information
            client__basic-information--${isOpen ? 'open' : ''}
          `}
        >
          <div className="client__company-details">
            <img
              alt="CompanyLogo"
              className="client__company-logo"
              src="/static/icons/humanoids-logo-small.jpg"
            />
            <div className="client__name">
              {clientName}
              <p className="client__city">
                {city}
              </p>
            </div>
          </div>
          <div
            className={`
              detailed-info
              detailed-info--${isOpen ? 'open' : ''}
            `}
          >
            Detailed information about {clientName}
          </div>
          <ul className="client__contact-details">
            <li
              className={`
                client__contact-details-label
                client__contact-details-label--${isOpen ? 'open' : ''}
              `}
            >
              <p className="client__contact-details-data">
                {phoneNumber}
              </p>
              Phone Number
            </li>
            <li
              className={`
                client__contact-details-label
                client__contact-details-label--${isOpen ? 'open' : ''}
              `}
            >
              <p className="client__contact-details-data">
                {email}
              </p>
              Email Address
            </li>
            <li className={`
                client__contact-details-label
                client__contact-details-label-website
                client__contact-details-label-website--${isOpen ? 'open' : ''}
              `}
            >
              <p className="client__contact-details-data">
                {website}
              </p>
              Website
            </li>
          </ul>
          <div className="client__info-toggle">
            {!isOpen && (
              <img
                alt="Open menu"
                className="client__info-toggle--open"
                src="/static/icons/arrow-down-2.svg"
              />
            )}
            {isOpen && (
              <img
                alt="Close menu"
                className="client__info-toggle--close"
                src="/static/icons/arrow-up.svg"
              />
            )}
          </div>
        </div>
        <div
          className={`
            client__detailed-information
            client__detailed-information--${isOpen ? 'open' : ''}
          `}
        >
          <div
            className="
              client__contact-details-label
              client__contact-details-label--address
            "
          >
            <p className="client__contact-details-data">
              {address}, {zip}
            </p>
            Address, ZIP code
          </div>
          <div
            className="
              client__contact-details-label
              client__contact-details-label--extra-info
            "
          >
            <p className="client__contact-details-data">
              {kvkNumber}
            </p>
            KVK Number
          </div>
          <div
            className="
              client__contact-details-label
              client__contact-details-label--extra-info
            "
          >
            <p className="client__contact-details-data">
              {remarks}
            </p>
            Remarks
          </div>
        </div>
      </div>
    );
  }
}

Client.propTypes = {
  clientName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  kvkNumber: PropTypes.string.isRequired,
  remarks: PropTypes.string.isRequired
};

export default Client;
