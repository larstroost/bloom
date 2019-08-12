import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './workflow.scss';

const Workflow = ({alt, asterisk, src, text}) => (
  <article className="workflow">
    <img
      className="workflow__image"
      src={src}
      alt={alt}
    />
    <p className="workflow__text">
      <i>{text}</i><span className="workflow__text workflow__text--asterisk">{asterisk}</span>
    </p>
  </article>
);

Workflow.defaultProps = {
  asterisk: ''
};

Workflow.propTypes = {
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  asterisk: PropTypes.string
};

export default Workflow;
