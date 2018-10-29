import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './knife-info-text.scss';

const KnifeInfoText = ({infoTitle}) => (
  <div className="info-box">
   <div className="info-box__wrapper">
    <h1 className="info-box__title">
     {infoTitle}
    </h1>
    <p className="info-box__text">
     Heel veel text over verschillende soorten messen hier komt veel informatie over messen nog meer informatie over wat er op deze pagina komt <br/>nog meer, want ik vind br in de code leuk <br/>en lars niet
    </p>
   </div>
   <img
     className="info-box__image"
     src="static/icons/kitchen-knife.jpg"
     alt="Kitchen Knife"
   />
  </div>
);

KnifeInfoText.propTypes = {
  infoTitle: PropTypes.string.isRequired
};

export default KnifeInfoText;
