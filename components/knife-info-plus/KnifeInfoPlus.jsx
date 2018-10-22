import React from 'react';
import Link from 'next/link';

import './knife-info-plus.scss';

class KnifeInfoPlus extends React.Component {
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
    return (
      //HTML
      <section
        className={`
          knife-info-plus
          knife-info-plus--${isOpen ? 'open' : 'closed'}
        `}
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div
          className={`
            knife-info-plus__wrapper-left
            knife-info-plus__wrapper-left--${isOpen ? 'open' : 'closed'}
          `}
        >
          <div className="knife-info-plus__opacity-bg">
            <h2 className="knife-info-plus__titel">
              Lange Mes Titel
            </h2>
          </div>
          <img
            className={`
              knife-info-plus__photo
              knife-info-plus__photo--${isOpen ? 'open' : 'closed'}
            `}
            src="static/icons/chef-knife.jpeg"
            alt="Messen Foto"
          />
          {!isOpen && (
            <img
              className="knife-info-plus__icon"
              src="static/icons/arrow-down-2.svg"
              alt="Arrow Down"
            />
          )}
          {isOpen && (
            <img
              className="knife-info-plus__icon"
              src="static/icons/arrow-up.svg"
              alt="Arrow Up"
            />
          )}
        </div>
        <div
          className={`
            knife-info-plus__wrapper-right
            knife-info-plus__wrapper-right--${isOpen ? 'open' : 'closed'}
          `}
        >
          <div className="knife-info-plus__opacity-info">
            <p className="knife-info-plus__info">
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
            </p>
          </div>
          <div className="knife-info-plus__link-wrapper">
            <Link href="/offerte">
              <button className="knife-info-plus__button knife-info-plus__button--left">
                <a className="knife-info-plus__link">
                  Offerte Aanvragen
                </a>
              </button>
            </Link>
            <Link href="/contact">
              <button className="knife-info-plus__button knife-info-plus__button--right">
                <a className="knife-info-plus__link">
                  Meer Informatie Opvragen
                </a>
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default KnifeInfoPlus;
