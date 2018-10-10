import React from 'react';
import Link from 'next/link';

import './header.scss';

class MainNav extends React.Component {
  state = { isOpen: false };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <header className="header">
        <Link href="/">
          <a className="header__logo">
            Bloom
          </a>
        </Link>
        <nav className={`
          main-nav
          main-nav--${isOpen ? 'open' : ''}
        `}
        >
          <ul>
            <li className="main-nav__item main-nav__item--active">
              <Link href="/messen">
                <a className="main-nav__link main-nav__link--active">
                  Messen
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link href="/">
                <a className="main-nav__link">
                  Snijplanken
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <a href="/" className="main-nav__link">
                Offerte Aanvragen
              </a>
            </li>
            <li className="main-nav__item">
              <Link href="/">
                <a className="main-nav__link">
                  Contact
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <a href="/" className="main-nav__link">
                Placeholder
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={this.toggleMenu}
          type="button"
        >
          {!isOpen && (
            <img
              alt="Open menu"
              className="menu-toggle__image menu-toggle__image--open"
              src="/static/icons/hamburger.svg"
            />
          )}
          {isOpen && (
            <img
              alt="Close menu"
              className="menu-toggle__image menu-toggle__image--close"
              src="/static/icons/close.svg"
            />
          )}
        </button>
      </header>
    );
  }
}

export default MainNav;
