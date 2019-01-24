import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './knife-info.scss';

class KnifeInfo extends React.Component {
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
          knife-info
          knife-info--${isOpen ? 'open' : 'closed'}
          knife-info--${className}
        `}
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div className="knife-info__wrapper-left">
          <div
            className={`
              knife-info__opacity-bg
              knife-info__opacity-bg--${isOpen ? 'open' : 'closed'}
            `}
          >
            <h2
              className={`
                knife-info__titel
                knife-info__titel--${isOpen ? 'open' : 'closed'}
              `}
            >
              {title}
            </h2>
          </div>
          <img
            className={`
              knife-info__photo
              knife-info__photo--${isOpen ? 'open' : 'closed'}
            `}
            src={photo}
            alt={alt}
          />
          {!isOpen && (
            <img
              className="knife-info__icon knife-info__icon--down"
              src="static/icons/arrow-down-2.svg"
              alt="Arrow Down"
            />
          )}
        </div>
        <div
          className={`
            knife-info__wrapper-right
            knife-info__wrapper-right--${isOpen ? 'open' : 'closed'}
          `}
        >
          <p className="knife-info__info">
            {info}
          </p>
          {isOpen && (
            <img
              className="knife-info__icon knife-info__icon--up-left"
              src="static/icons/arrow-up.svg"
              alt="Arrow Up"
            />
          )}
          {isOpen && (
            <img
              className="knife-info__icon knife-info__icon--up-right"
              src="static/icons/arrow-up.svg"
              alt="Arrow Up"
            />
          )}
          <Link href="/contact">
            <button className="knife-info__button knife-info__button--right">
              <a className="knife-info__link">
                Meer Informatie Opvragen
              </a>
            </button>
          </Link>
        </div>
      </li>
    );
  }
}

KnifeInfo.defaultProps = {
  alt: 'Foto van messensoort',
  className: ''
};

KnifeInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default KnifeInfo;
