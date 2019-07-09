import React from 'react';
import Link from 'next/link';

import './desktop-header-bar.scss';

const TopHeader = () => (
  <section className="top-header">
    <Link href="/">
      <img
        className="top-header__logo"
        src="../../static/logos/bloom-logo.png"
        alt="Bloom Logo"
      />
    </Link>
    <p className="top-header__slogan">
      <i>De slijper voor al uw messen.</i>
    </p>
    <div className="top-header__icon-wrapper">
      <div className="top-header__contact-wrapper">
        <img
          className="top-header__phone-icon"
          src="../../static/icons/phone.svg"
          alt="Phone Icon"
        />
        <p className="top-header__contact">
          078 682 4977
        </p>
      </div>
      <div className="top-header__contact-wrapper">
        <img
          className="top-header__phone-icon"
          src="../../static/icons/envelope.svg"
          alt="Email Icon"
        />
        <p className="top-header__contact" href="mailto:larstroost@upcmail.nl">
          info@horecaslijperijbloom.nl
        </p>
      </div>
    </div>
  </section>
);

export default TopHeader;
