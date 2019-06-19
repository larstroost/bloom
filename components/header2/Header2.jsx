import React from 'react';
import Link from 'next/link';

import './header2.scss';

const TopHeader = () => (
  <section className="header-two">
    <img
      className="header-two__header"
      src="../../static/photos/index/header3.jpg"
      alt="header"
    />
    <Link href="/">
      <img
        className="header-two__logo"
        src="../../static/logos/logo-white-test.png"
        alt="Bloom Logo"
      />
    </Link>
    <div className="header-two__icon-wrapper">
      <div className="header-two__contact-wrapper">
        <img
          className="header-two__phone-icon"
          // src="../../static/icons/phone.svg"
          // alt="Phone Icon"
        />
        <p className="header-two__contact">
          078 682 4977
        </p>
      </div>
      <div className="header-two__contact-wrapper">
        <img
          className="header-two__phone-icon"
          // src="../../static/icons/envelope.svg"
          // alt="Email Icon"
        />
        <p className="header-two__contact" href="mailto:larstroost@upcmail.nl">
          info@horecaslijperijbloom.nl
        </p>
      </div>
    </div>
  </section>
);

export default TopHeader;
