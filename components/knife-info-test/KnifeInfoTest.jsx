import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './knife-info-test.scss';

class KnifeInfoTest extends React.Component {

  render() {
    const { title, info, photoOne, photoTwo, altOne, altTwo, className, link } = this.props;
    return (
      <li
        className={`
          knife-info-test
          knife-info-test--${className}
        `}
      >
        <div className="knife-info-test__wrapper">
          <div
            className="knife-info-test__title-wrapper">
            <h2
              className="knife-info-test__title">
              {title}
            </h2>
          </div>
          <img
            className="knife-info-test__photo knife-info-test--one"
            src={photoOne}
            alt={altOne}
          />
          <img
            className="knife-info-test__photo knife-info-test--two"
            src={photoTwo}
            alt={altTwo}
          />
        </div>
        <button
          className="knife-info-test__button"
          tabIndex="0"
          type="button"
        >
          <Link href={link}>
            <a className="knife-info-test__info">
              {info}
            </a>
          </Link>
        </button>
      </li>
    );
  }
}

KnifeInfoTest.defaultProps = {
  altOne: 'Foto',
  altTwo: 'Foto',
  className: ''
};

KnifeInfoTest.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photoOne: PropTypes.string.isRequired,
  photoTwo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  altOne: PropTypes.string,
  altTwo: PropTypes.string,
  className: PropTypes.string
};

export default KnifeInfoTest;
