import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './info-section-text.scss';

class InfoSectionText extends React.Component {
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { info, className } = this.props;
    return (
      <li
        className={`
          info-section-text
          info-section-text--${isOpen ? 'open' : 'closed'}
          info-section-text--${className}
        `}
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <p className="info-section-text__info">
          {info}
        </p>
      </li>
    );
  }
}

InfoSectionText.defaultProps = {
  className: ''
};

InfoSectionText.propTypes = {
  info: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default InfoSectionText;
