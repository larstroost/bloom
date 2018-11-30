import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './info-section-reversed.scss';

const InfoSectionReversed = ({alt, infoText, infoTitle, src}) => (
  <section className="info-section-reversed">
    <img
      className="info-section-reversed__image"
      src={src}
      alt={alt}
    />
    <div className="info-section-reversed__wrapper">
      <h1 className="info-section-reversed__title">
        {infoTitle}
      </h1>
      <p className="info-section-reversed__text">
        {infoText}
      </p>
    </div>
  </section>
);

InfoSectionReversed.propTypes = {
  alt: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default InfoSectionReversed;
