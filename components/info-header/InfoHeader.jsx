import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './info-header.scss';

const InfoHeader = ({alt, infoText, infoTitle, src}) => (
  <div className="info-header">
    <div className="info-header__wrapper">
      <h1 className="info-header__title">
        {infoTitle}
      </h1>
      <p className="info-header__text">
        {infoText}
      </p>
    </div>
    <img
      className="info-header__image"
      src={src}
      alt={alt}
    />
  </div>
);

InfoHeader.propTypes = {
  alt: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default InfoHeader;
