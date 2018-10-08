import React from 'react';
import PropTypes from 'prop-types';

import './team-member.scss';

class TeamMember extends React.Component {
  state = { isOpen: false };

  toggleInfo = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      firstName,
      lastName,
      job,
      employeeNumber,
      currentEmployer,
      startingDate
    } = this.props;
    return (
      <div
        className="team-member"
        onClick={this.toggleInfo}
        role="button"
        onKeyDown={this.toggleInfo}
        tabIndex="0"
      >
        <div
          className={`
            team-member__basic-info
            team-member__basic-info--${isOpen ? 'open' : 'closed'}
          `}
        >
          <div className="team-member__personal-details">
            <img
              alt="ProfilePhoto"
              className="team-member__profile-logo"
              src="/static/icons/avatar.png"
            />
            <div className="team-member__name">
              {firstName} {lastName}
              <p className="team-member__job">
                {job}
              </p>
            </div>
          </div>
          <div className={`
              detailed-info
              detailed-info--${isOpen ? 'open' : 'closed'}
            `}
          >
          Detailed information about {firstName}
          </div>
          <ul className="team-member__employment-details">
            <li className="team-member__employment-details-label">
              <p className="team-member__employment-details-data">
                {employeeNumber}
              </p>
              Employee Number
            </li>
            <li className={`
              team-member__employment-details-label
              team-member__employment-details-label--${isOpen ? 'open' : 'closed'}
              `}
            >
              <p className="team-member__employment-details-data">
                {currentEmployer}
              </p>
              Current Employer
            </li>
            <li className={`
              team-member__employment-details-label
              team-member__employment-details-label--${isOpen ? 'open' : 'closed'}
              `}
            >
              <p className="team-member__employment-details-data">
                {startingDate}
              </p>
              Starting date
            </li>
          </ul>
          <div className="team-member__info-toggle">
            {!isOpen && (
              <img
                alt="Open menu"
                className="team-member__info-toggle--open"
                src="/static/icons/arrow-down-2.svg"
              />
            )}
            {isOpen && (
              <img
                alt="Close menu"
                className="team-member__info-toggle--close"
                src="/static/icons/arrow-up.svg"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

TeamMember.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
  currentEmployer: PropTypes.string.isRequired,
  startingDate: PropTypes.string.isRequired
};

export default TeamMember;
