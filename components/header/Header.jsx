import React from 'react';
import Link from 'next/link';

import './header.scss';
import TopHeader from '../desktop-header-bar/DesktopHeaderBar';

class MainNav extends React.Component {
  state = {
    isOpen: false,
    showingPhone: false,
    showingEmail: false
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  togglePhone = () => {
    this.setState((prevState) => ({
      showingPhone: !prevState.showingPhone
    }));
    this.setState(() => ({
      showingEmail: false
    }));
  };

  toggleEmail = () => {
    this.setState((prevState) => ({
      showingEmail: !prevState.showingEmail
    }));
    this.setState(() => ({
      showingPhone: false
    }));
  };

  render() {
    const { isOpen, showingPhone, showingEmail } = this.state;
    const { page } = this.props;
    return (
      <header className="header">
        <TopHeader />
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
                main-nav__item--${page === 'koksmessen' ? 'active' : ''}
              `}
            >
              <Link href="/koksmessen">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'koksmessen' ? 'active' : ''}
                  `}
                >
                  Koksmessen
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'tafelmessen' ? 'active' : ''}
              `}
            >
              <Link href="/tafelmessen">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'tafelmessen' ? 'active' : ''}
                  `}
                >
                  Tafelmessen
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'scharen' ? 'active' : ''}
              `}
            >
              <Link href="/scharen">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'scharen' ? 'active' : ''}
                  `}
                >
                  Scharen
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
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'overOns' ? 'active' : ''}
              `}
            >
              <Link href="/over-ons">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'overOns' ? 'active' : ''}
                  `}
                >
                  Over Ons
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="toggle toggle--menu"
          onClick={this.toggleMenu}
          type="button"
        >
          {!isOpen && (
            <img
              alt="Open menu"
              className="toggle__image toggle__image--open"
              src="/static/icons/hamburger.svg"
            />
          )}
          {isOpen && (
            <img
              alt="Close menu"
              className="toggle__image toggle__image--close"
              src="/static/icons/close.svg"
            />
          )}
        </button>
        <button
          className="toggle toggle--phone"
          onClick={this.togglePhone}
          type="button"
        >
          <img
            alt="Phone icon"
            className="toggle__image toggle__image--phone"
            src="/static/icons/phone-white.svg"
          />
        </button>
        {showingPhone && (
          <div className="toggle__dropdown">
            <p className="toggle__dropdown-text">
              078 682 4977
            </p>
          </div>
        )}
        <button
          className="toggle toggle--email"
          onClick={this.toggleEmail}
          type="button"
        >
          <img
            alt="Email icon"
            className="toggle__image toggle__image--email"
            src="/static/icons/envelope-white.svg"
          />
        </button>
        {showingEmail && (
          <div className="toggle__dropdown">
            <p className="toggle__dropdown-text">
              info@horecaslijperijbloom.nl
            </p>
          </div>
        )}
      </header>
    );
  }
}

export default MainNav;
