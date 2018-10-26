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
    const { page } = this.props;
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
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'messen' ? 'active' : ''}
              `}
            >
              <Link href="/messen">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'messen' ? 'active' : ''}
                  `}
                >
                  Messen Slijpen
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'snijplanken' ? 'active' : ''}
              `}
            >
              <Link href="/snijplanken">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'snijplanken' ? 'active' : ''}
                  `}
                >
                  Snijplanken Vlakken
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'offerte' ? 'active' : ''}
              `}
            >
              <Link href="/offerte">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'offerte' ? 'active' : ''}
                  `}
                >
                  Offerte Aanvragen
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'contact' ? 'active' : ''}
              `}
            >
              <Link href="/contact">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'contact' ? 'active' : ''}
                  `}
                >
                  Contact
                </a>
              </Link>
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
