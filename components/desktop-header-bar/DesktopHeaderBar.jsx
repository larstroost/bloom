import React from 'react';
import Link from 'next/link';

import './desktop-header-bar.scss';

const TopHeader = () => (
  <section className="top-header">
    <Link href="/">
      <img
        className="top-header__logo"
        src="static/icons/bloom-logo.jpg"
        alt="Bloom Logo"
      />
    </Link>
    <p className="top-header__slogan">
      <i>Al uw messen worden voor u op locatie geslepen.</i>
    </p>
    <div className="top-header__icon-wrapper">
      <a
        className="top-header__contact-wrapper"
        href="tel:123456789"
      >
        <img
          className="top-header__phone-icon"
          src="static/icons/phone.svg"
          alt="Phone Icon"
        />
        <p className="top-header__contact">
          078-XXXXXXX
        </p>
      </a>
      <a
        className="top-header__contact-wrapper"
        href="mailto:someone@something.com"
      >
        <img
          className="top-header__phone-icon"
          src="static/icons/envelope.svg"
          alt="Email Icon"
        />
        <p className="top-header__contact" href="mailto:larstroost@upcmail.nl">
          info@bloom.nl
        </p>
      </a>
    </div>
  </section>
);

export default TopHeader;
