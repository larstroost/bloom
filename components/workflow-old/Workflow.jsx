import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './workflow.scss';

const Workflow = () => (
  <article className="workflow">
    <img
      className="workflow__image"
      src="/static/photos/index/workflow-1.jpg"
      alt="Busje"
    />
    <p className="workflow__text">
      <i>Wij komen naar uw locatie toe</i>
    </p>
  </article>
);

export default Workflow;
