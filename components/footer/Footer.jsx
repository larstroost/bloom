import React from 'react';
import Link from 'next/link';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__section">
        <p className="footer__header">
          Adres
        </p>
        <p className="footer__info">
          Horeca Slijperij Bloom B.V.<br />
          De Plaats 22<br />
          3342 GL Hendrik-Ido-Ambacht
        </p>
      </div>
      <div className="footer__section">
        <p className="footer__header">
          Contact
        </p>
        <p className="footer__info">
          078 682 4977<br />
          info@horecaslijperijbloom.nl
        </p>
      </div>
      <ul className="footer__section">
        <p className="footer__header">
          Menu
        </p>
        <li className="footer__menu-item">
          <Link href="/">
            <a className="footer__menu-link">
              Home
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/koksmessen">
            <a className="footer__menu-link">
              Koksmessen
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/tafelmessen">
            <a className="footer__menu-link">
              Tafelmessen
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/snijplanken">
            <a className="footer__menu-link">
              Snijplanken
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/overige">
            <a className="footer__menu-link">
              Overige
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/contact">
            <a className="footer__menu-link">
              Contact
            </a>
          </Link>
        </li>
        <li className="footer__menu-item">
          <Link href="/over-ons">
            <a className="footer__menu-link">
              Over Ons
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
