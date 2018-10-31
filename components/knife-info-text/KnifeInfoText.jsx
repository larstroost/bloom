import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './knife-info-text.scss';

const KnifeInfoText = ({alt, infoText, infoTitle, src}) => (
  <div className="info-box">
    <div className="info-box__wrapper">
      <h1 className="info-box__title">
        {infoTitle}
      </h1>
      <p className="info-box__text">
        {infoText}
      </p>
    </div>
    <img
      className="info-box__image"
      src={src}
      alt={alt}
    />
  </div>
);

KnifeInfoText.propTypes = {
  alt: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default KnifeInfoText;
