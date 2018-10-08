import React from 'react';
import PropTypes from 'prop-types';

import './team-members.scss';
import TeamMember from '../team-member/TeamMember';
import NewTeamMember from '../new-team-member/NewTeamMember';
import PageHeader from '../page-header/PageHeader';

class TeamMembers extends React.Component {
  componentDidMount() {
    this.props.requestTeamMembers();
    this.props.returnToDefault();
  }

  handleSortBy = (event) => {
    this.props.sortByTeamMembers(event.target.value);
  };

  handleSortDirection = (event) => {
    this.props.sortDirectionTeamMembers(event.target.value);
  };

  addTeamMember = (newTeamMember) => {
    this.props.addNewTeamMember(newTeamMember);
  };

  render() {
    const { teamMembers, changeActiveFilter } = this.props;
    return (
      <React.Fragment>
        <PageHeader
          title="Team Members"
          subtitle="22 Humanoids"
          onChangeActiveFilter={changeActiveFilter}
          options={this.props.filterOptions}
          standardOption="All Humanoids"
        />
        <NewTeamMember
          onAddTeamMember={this.addTeamMember}
          onHandleSortBy={this.handleSortBy}
          onHandleSortDirection={this.handleSortDirection}
        />
        {teamMembers.map((teamMember) => (
          <React.Fragment key={teamMember.id}>
            <TeamMember
              firstName={teamMember.firstName}
              lastName={teamMember.lastName}
              job={teamMember.job}
              employeeNumber={teamMember.employeeNumber}
              currentEmployer={teamMember.currentEmployer}
              startingDate={teamMember.startingDate}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      employeeNumber: PropTypes.string.isRequired,
      currentEmployer: PropTypes.string.isRequired,
      startingDate: PropTypes.string.isRequired
    })
  ).isRequired,
  addNewTeamMember: PropTypes.func.isRequired,
  requestTeamMembers: PropTypes.func.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  returnToDefault: PropTypes.func.isRequired,
  sortByTeamMembers: PropTypes.func.isRequired,
  sortDirectionTeamMembers: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TeamMembers;
