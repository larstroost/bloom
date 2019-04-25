import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './info-section-test.scss';

const InfoSectionTest = ({alt, infoText, infoTitle, src}) => (
  <div className="info-box-test">
    <div className="info-box-test__wrapper">
      <h1 className="info-box-test__title">
        {infoTitle}
      </h1>
      <p className="info-box-test__text">
        {infoText}
      </p>
    </div>
    <img
      className="info-box-test__image"
      src={src}
      alt={alt}
    />
  </div>
);

InfoSectionTest.propTypes = {
  alt: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default InfoSectionTest;
