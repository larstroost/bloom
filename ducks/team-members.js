import { createSelector } from 'reselect';

export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const ADD_NEW_TEAM_MEMBER = 'ADD_NEW_TEAM_MEMBER';
export const ADD_NEW_TEAM_MEMBER_SUCCESS = 'ADD_NEW_TEAM_MEMBER_SUCCESS';
export const FILTER_CHANGE_TEAM_MEMBERS = 'FILTER_CHANGE_TEAM_MEMBERS';
export const LEAVING_TEAM_MEMBERS_PAGE = 'LEAVING_TEAM_MEMBERS_PAGE';
export const SORT_BY_TEAM_MEMBERS = 'SORT_BY_TEAM_MEMBERS';
export const SORT_DIRECTION_TEAM_MEMBERS = 'SORT_DIRECTION_TEAM_MEMBERS';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
  activeFilter: '',
  activeSortBy: 'lastName',
  activeSortDirection: 'ascending'
};

const teamMembersRootSelector = (state) => state.teamMembers;

const teamMembersItemsSelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.items
);

const teamMembersActiveFilterSelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.activeFilter
);

const teamMembersActiveSortBySelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.activeSortBy
);

const teamMembersActiveSortDirectionSelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.activeSortDirection
);

export const teamMembersPageFilterSelector = createSelector(
  teamMembersItemsSelector,
  (teamMembers) => ([...new Set(teamMembers.map(
    (teamMember) => (teamMember.job)
  ))]).map((value) => ({ name: value, id: value }))
);

export const teamMembersSelector = createSelector(
  [
    teamMembersItemsSelector,
    teamMembersActiveFilterSelector,
    teamMembersActiveSortBySelector,
    teamMembersActiveSortDirectionSelector
  ],
  (items, activeFilter, activeSortBy, activeSortDirection) => (
    (items.filter((item) => !activeFilter
      || item.job === activeFilter)
    ).sort((a, b) => {
      if (a[activeSortBy].toUpperCase() > b[activeSortBy].toUpperCase()) {
        return activeSortDirection === 'ascending' ? 1 : -1;
      }
      if (a[activeSortBy].toUpperCase() < b[activeSortBy].toUpperCase()) {
        return activeSortDirection === 'ascending' ? -1 : 1;
      }
      return 0;
    })
  )
);

export function teamMembersReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TEAM_MEMBERS:
      return { ...state, isLoading: true };
    case REQUEST_TEAM_MEMBERS_SUCCESS:
      return { ...state, isLoading: false, items: action.teamMembers };
    case ADD_NEW_TEAM_MEMBER:
      return { ...state, isLoading: true };
    case ADD_NEW_TEAM_MEMBER_SUCCESS:
      return { ...state, isLoading: false, items: [action.newTeamMember, ...state.items] };
    case FILTER_CHANGE_TEAM_MEMBERS:
      return { ...state, activeFilter: action.selectedFilter };
    case LEAVING_TEAM_MEMBERS_PAGE:
      return { ...state, activeFilter: '' };
    case SORT_BY_TEAM_MEMBERS:
      return { ...state, activeSortBy: action.activeSortBy };
    case SORT_DIRECTION_TEAM_MEMBERS:
      return { ...state, activeSortDirection: action.activeSortDirection };
    default:
      return state;
  }
}

export const sortDirectionTeamMembers = (activeSortDirection) => ({
  type: SORT_DIRECTION_TEAM_MEMBERS,
  activeSortDirection
});

export const sortByTeamMembers = (activeSortBy) => ({
  type: SORT_BY_TEAM_MEMBERS,
  activeSortBy
});

export const returnToDefault = () => ({
  type: LEAVING_TEAM_MEMBERS_PAGE
});

export const requestTeamMembers = () => ({
  type: REQUEST_TEAM_MEMBERS
});

export const requestTeamMembersSuccess = (teamMembers) => ({
  type: REQUEST_TEAM_MEMBERS_SUCCESS,
  teamMembers
});

export const addNewTeamMember = (newTeamMember) => ({
  type: ADD_NEW_TEAM_MEMBER,
  newTeamMember
});

export const addNewTeamMemberSuccess = (newTeamMember) => ({
  type: ADD_NEW_TEAM_MEMBER_SUCCESS,
  newTeamMember
});

export const changeActiveFilter = (selectedFilter) => ({
  type: FILTER_CHANGE_TEAM_MEMBERS,
  selectedFilter
});
