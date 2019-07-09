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
    this.setState(() => ({
      showingPhone: false
    }));
    this.setState(() => ({
      showingEmail: false
    }));
  };

  togglePhone = () => {
    this.setState((prevState) => ({
      showingPhone: !prevState.showingPhone
    }));
    this.setState(() => ({
      showingEmail: false
    }));
    this.setState(() => ({
      isOpen: false
    }));
  };

  toggleEmail = () => {
    this.setState((prevState) => ({
      showingEmail: !prevState.showingEmail
    }));
    this.setState(() => ({
      showingPhone: false
    }));
    this.setState(() => ({
      isOpen: false
    }));
  };

  render() {
    const { isOpen, showingPhone, showingEmail } = this.state;
    const { page } = this.props;
    return (
      <header className="header">
        <TopHeader />
        <Link href="/">
          <img
            className="header__logo"
            src="../../static/logos/Bloom-wit-volledig.png"
            alt="Bloom Logo"
          />
        </Link>
        <nav className={`
          main-nav
          main-nav--${isOpen ? 'open' : ''}
        `}
        >
          <img
            className="main-nav__background"
            src="../../static/photos/about-us/PortretHJ.jpeg"
          />
          <ul className="main-nav__list">
            <li
              className={`
                main-nav__item
                main-nav__item--first
                main-nav__item--${page === 'index' ? 'active' : ''}
              `}
            >
              <Link href="/">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'index' ? 'active' : ''}
                  `}
                >
                  HOME
                </a>
              </Link>
            </li>
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
                  KOKSMESSEN
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
                  TAFELMESSEN
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
                  SNIJPLANKEN
                </a>
              </Link>
            </li>
            <li
              className={`
                main-nav__item
                main-nav__item--${page === 'overige' ? 'active' : ''}
              `}
            >
              <Link href="/overige">
                <a
                  className={`
                    main-nav__link
                    main-nav__link--${page === 'overige' ? 'active' : ''}
                  `}
                >
                  OVERIGE
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
                  CONTACT
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
                  OVER ONS
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
              className="toggle__image"
              src="/static/icons/hamburger.svg"
            />
          )}
          {isOpen && (
            <img
              alt="Close menu"
              className="toggle__image"
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
