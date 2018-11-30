import React from 'react';
import Link from 'next/link';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__section">
      <p className="footer__header">
        Adres
      </p>
      <p className="footer__info">
        Bloom<br />
        Straat Nummer<br />
        Postcode Hendrik-Ido-Ambacht
      </p>
    </div>
    <div className="footer__section">
      <p className="footer__header">
        Contact
      </p>
      <p className="footer__info">
        info@horecaslijperijbloom.nl<br />
        078-6824977
      </p>
    </div>
    <ul className="footer__section">
      <p className="footer__header">
        Menu
      </p>
      <li className="footer__menu-item">
        <Link href="/koksmessen">
          <a className="footer__menu-link">
            Koksmessen Slijpen
          </a>
        </Link>
      </li>
      <li className="footer__menu-item">
        <Link href="/tafelmessen">
          <a className="footer__menu-link">
            Tafelmessen Slijpen
          </a>
        </Link>
      </li>
      <li className="footer__menu-item">
        <Link href="/scharen">
          <a className="footer__menu-link">
            Scharen Slijpen
          </a>
        </Link>
      </li>
      <li className="footer__menu-item">
        <Link href="/snijplanken">
          <a className="footer__menu-link">
            Snijplanken Vlakken
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
  </footer>
);

export default Footer;
