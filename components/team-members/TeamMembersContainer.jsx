import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  teamMembersSelector,
  teamMembersPageFilterSelector,
  requestTeamMembers,
  requestTeamMembersSuccess,
  addNewTeamMember,
  addNewTeamMemberSuccess,
  changeActiveFilter,
  returnToDefault,
  sortByTeamMembers,
  sortDirectionTeamMembers
} from '../../ducks/team-members';

import TeamMembers from './TeamMembers';

const mapStateToProps = (state) => ({
  teamMembers: teamMembersSelector(state),
  filterOptions: teamMembersPageFilterSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestTeamMembers,
  requestTeamMembersSuccess,
  addNewTeamMember,
  addNewTeamMemberSuccess,
  changeActiveFilter,
  returnToDefault,
  sortByTeamMembers,
  sortDirectionTeamMembers
}, dispatch);

const TeamMembersContainer = (props) => (
  <TeamMembers {...props} />
);

TeamMembersContainer.propTypes = TeamMembers.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersContainer);
