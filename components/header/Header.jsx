import React from 'react';
import Link from 'next/link';

import './header.scss';

class MainNav extends React.Component {
  state = { open: false };

  toggleMenu = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <header className="header">
        <Link href="/">
          <a className="header__logo">
            team awesome
          </a>
        </Link>
        <nav className={`
          main-nav
          main-nav--${open ? 'open' : ''}
        `}
        >
          <ul>
            <li className="main-nav__item main-nav__item--active">
              <Link href="/timesheets">
                <a className="main-nav__link main-nav__link--active">
                  Timesheets
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link href="/team-members">
                <a className="main-nav__link">
                  Team Members
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <a href="/" className="main-nav__link">
                Projects
              </a>
            </li>
            <li className="main-nav__item">
              <Link href="/clients">
                <a className="main-nav__link">
                  Clients
                </a>
              </Link>
            </li>
            <li className="main-nav__item">
              <a href="/" className="main-nav__link">
                Documents
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={this.toggleMenu}
          type="button"
        >
          {!open && (
            <img
              alt="Open menu"
              className="menu-toggle__image menu-toggle__image--open"
              src="/static/icons/hamburger.svg"
            />
          )}
          {open && (
            <img
              alt="Close menu"
              className="menu-toggle__image menu-toggle__image--close"
              src="/static/icons/close.svg"
            />
          )}
        </button>
        <div className="profile">
          <img
            alt="Humanoids logo"
            className="profile__logo"
            src="/static/icons/humanoids-logo.png"
          />
          <img
            alt="Avatar"
            className="profile__avatar"
            src="/static/icons/avatar.png"
          />
        </div>
      </header>

    );
  }
}

export default MainNav;
