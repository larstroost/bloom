import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './workflow.scss';

const Workflow = ({alt, src, text}) => (
  <article className="workflow">
    <img
      className="workflow__image"
      src={src}
      alt={alt}
    />
    <p className="workflow__text">
      <i>{text}</i>
    </p>
  </article>
);

Workflow.propTypes = {
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Workflow;
