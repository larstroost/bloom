import React from 'react';
import Link from 'next/link';

import './desktop-header-bar.scss';

const TopHeader = () => (
  <section className="top-header">
    <Link href="/">
      <img
        className="top-header__logo"
        src="static/logos/bloom-logo.png"
        alt="Bloom Logo"
      />
    </Link>
    <p className="top-header__slogan">
      <i>Voor beroepsmatig en particulier gebruik.</i>
    </p>
    <div className="top-header__icon-wrapper">
      <a
        className="top-header__contact-wrapper"
        href="tel:0786824977"
      >
        <img
          className="top-header__phone-icon"
          src="static/icons/phone.svg"
          alt="Phone Icon"
        />
        <p className="top-header__contact">
          078 682 4977
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
          info@horecaslijperijbloom.nl
        </p>
      </a>
    </div>
  </section>
);

export default TopHeader;
