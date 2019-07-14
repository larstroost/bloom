import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import InfoSectionText from '../info-section-text/InfoSectionText';

import './knife-info-test.scss';

class KnifeInfoTest extends React.Component {
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { title, info, photo, alt, className } = this.props;
    return (
      <li
        className={`
          knife-info-test
          knife-info-test--${isOpen ? 'open' : 'closed'}
          knife-info-test--${className}
        `}
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div className="knife-info-test__wrapper">
          <div
            className="knife-info-test__title-wrapper">
            <h2
              className="knife-info-test__title">
              {title}
            </h2>
          </div>
          <img
            className="knife-info-test__photo"
            src={photo}
            alt={alt}
          />
          {!isOpen && (
            <img
              className="knife-info-test__icon"
              src="../../static/icons/arrow-down-2.svg"
              alt="Arrow Down"
            />
          )}
          {isOpen && (
            <img
              className="knife-info-test__icon"
              src="../../static/icons/arrow-up.svg"
              alt="Arrow Up"
            />
          )}
        </div>
        <p
          className={`
            knife-info-test__info
            knife-info-test__info--${isOpen ? 'open' : 'closed'}
          `}
        >
          {info}
        </p>
      </li>
    );
  }
}

KnifeInfoTest.defaultProps = {
  alt: 'Foto van messensoort',
  className: ''
};

KnifeInfoTest.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default KnifeInfoTest;
