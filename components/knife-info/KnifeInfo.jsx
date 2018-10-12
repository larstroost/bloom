import React from 'react';
import Link from 'next/link';

import './knife-info.scss';

class KnifeInfo extends React.Component {
    //state en functies
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    //destructuring and props
    const { isOpen } = this.state;
    const { title, src, basicInfo, extendedInfo } = this.props;
    return (
      //HTML
      <section
        className="knife-info"
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div className="knife-info__left-section">
          <img
            className="knife-info__image"
            src={src}
            alt="Kitchen Knife"
          />
          <Link href="/offerte">
            <button className="knife-info__button knife-info__button--top">
              <a className="knife-info__link">
                Offerte Aanvragen
              </a>
            </button>
          </Link>
          <Link href="/contact">
            <button className="knife-info__button knife-info__button--bottom">
              <a className="knife-info__link">
                Meer Informatie Opvragen
              </a>
            </button>
          </Link>
        </div>
        <div className="knife-info__right-section">
          <div className="knife-info__wrapper">
            <h2 className="knife-info__title">
              {title}
            </h2>
            {!this.state.isOpen && (
              <p className="knife-info__text">
                {basicInfo}
              </p>
            )}
            {this.state.isOpen && (
              <p className="knife-info__text">
                {extendedInfo}
              </p>
            )}
            {!isOpen && (
              <img
                className="knife-info__arrow"
                src="static/icons/arrow-down-2.svg"
                alt="Arrow Down"
              />
            )}
            {isOpen && (
              <img
                className="knife-info__arrow"
                src="static/icons/arrow-up.svg"
                alt="Arrow Up"
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default KnifeInfo;
