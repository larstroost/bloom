import React from 'react';

import './knife-info.scss';

class KnifeInfo extends React.Component {
    //state en functies
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    //destructuring and props
    const { isOpen } = this.state;
    const { title, src } = this.props;
    return (
      //HTML
      <section
        className="knife-info"
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <img
          className="knife-info__image"
          src={src}
          alt="Kitchen Knife"
        />
        <div className="knife-info__wrapper">
          <h2 className="knife-info__title">
            {title}
          </h2>
          {!this.state.isOpen && (
            <p className="knife-info__text">
              Placeholder basic info
            </p>
          )}
          {this.state.isOpen && (
            <p className="knife-info__text">
              Placeholder tering veel tekst
            </p>
          )}
          {!isOpen && (
            <img
              className="knife-info__arrow"
              src="static/icons/arrow-down-2.svg"
              alt="Arrow Down"
            />
          )}
          {isOpen && (
            <img
              className="knife-info__arrow"
              src="static/icons/arrow-up.svg"
              alt="Arrow Up"
            />
          )}
        </div>
      </section>
    );
  }
}

export default KnifeInfo;
