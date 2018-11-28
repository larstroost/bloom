import React from 'react';
import Link from 'next/link';

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
    const { title, info, photo} = this.props;
    return (
      <li
        className={`
          knife-info
          knife-info--${isOpen ? 'open' : 'closed'}
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
            <h2 className="knife-info__titel">
              {title}
            </h2>
          </div>
          <img
            className="knife-info__photo"
            src={photo}
            alt="Messen Foto"
          />
          {!isOpen && (
            <img
              className="knife-info__icon"
              src="static/icons/arrow-down-2.svg"
              alt="Arrow Down"
            />
          )}
          {isOpen && (
            <img
              className="knife-info__icon"
              src="static/icons/arrow-up.svg"
              alt="Arrow Up"
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

KnifeInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default KnifeInfo;
