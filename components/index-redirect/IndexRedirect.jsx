import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './index-redirect.scss';

class IndexRedirect extends React.Component {

  render() {
    const { title, info, photoOne, photoTwo, altOne, altTwo, className, link } = this.props;
    return (
      <li
        className={`
          index-redirect
          index-redirect--${className}
        `}
      >
        <div className="index-redirect__wrapper">
          <div
            className="index-redirect__title-wrapper">
            <h2
              className="index-redirect__title">
              {title}
            </h2>
          </div>
          <img
            className="index-redirect__photo index-redirect--one"
            src={photoOne}
            alt={altOne}
          />
          <img
            className="index-redirect__photo index-redirect--two"
            src={photoTwo}
            alt={altTwo}
          />
        </div>
        <button
          className="index-redirect__button"
          tabIndex="0"
          type="button"
        >
          <Link href={link}>
            <a className="index-redirect__info">
              {info}
            </a>
          </Link>
        </button>
      </li>
    );
  }
}

IndexRedirect.defaultProps = {
  altOne: 'Foto',
  altTwo: 'Foto',
  className: ''
};

IndexRedirect.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photoOne: PropTypes.string.isRequired,
  photoTwo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  altOne: PropTypes.string,
  altTwo: PropTypes.string,
  className: PropTypes.string
};

export default IndexRedirect;
