import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  className, onClick, text, type
}) => (
  <button
    className={`
      button
      ${className}
    `}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  className: '',
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
