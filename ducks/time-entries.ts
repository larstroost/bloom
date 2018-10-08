import { createSelector } from 'reselect';

import { clientsItemsSelector } from './clients';

export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const ADD_NEW_TIME_ENTRY = 'ADD_NEW_TIME_ENTRY';
export const ADD_NEW_TIME_ENTRY_SUCCESS = 'ADD_NEW_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const FILTER_CHANGE_TIME_ENTRIES = 'FILTER_CHANGE_TIME_ENTRIES';
export const LEAVING_TIMESHEETS_PAGE = 'LEAVING_TIMESHEETS_PAGE';

export interface TimeEntryModel {
  activity?: string;
  clientId?: string;
  startTime: string;
  stopTime: string;
  id?: string;
  date?: string;
  clientName?: string;
}

interface TimeEntriesState {
  items: TimeEntryModel[];
  error: string;
  isLoading: boolean;
  activeFilter: string;
  activeSortBy: string;
  activeSortDirection: string;
}

const initialState: TimeEntriesState = {
  items: [],
  error: null,
  isLoading: false,
  activeFilter: '',
  activeSortBy: 'startTime',
  activeSortDirection: 'descending'
};

const timeEntriesRootSelector = (state) => state.timeEntries;

const timeEntriesItemsSelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.items
);

const timeEntriesActiveFilterSelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.activeFilter
);

const timeEntriesActiveSortBySelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.activeSortBy
);

const timeEntriesActiveSortDirectionSelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.activeSortDirection
);

const timeEntriesWithClientNamesSelector = createSelector(
  [timeEntriesItemsSelector, clientsItemsSelector],
  (items, clients) => items.map((item) => {
    const clientMatch = clients.find(
      (client) => item.clientId === client.id
    );
    const clientName = clientMatch && clientMatch.clientName;
    return { ...item, clientName };
  })
);

export const timeEntriesFilterClientsSelector = createSelector(
  clientsItemsSelector,
  (items) => items.map(
    (item) => ({ id: item.id, name: item.clientName })
  )
);

export const timeEntriesSelector = createSelector(
  [timeEntriesWithClientNamesSelector,
    timeEntriesActiveFilterSelector,
    timeEntriesActiveSortBySelector,
    timeEntriesActiveSortDirectionSelector
  ],
  (items, activeFilter, activeSortBy, activeSortDirection) => (
    items.filter((item) => !activeFilter || item.clientId === activeFilter)
    .sort((a, b) => {
      if (a[activeSortBy].toUpperCase() < b[activeSortBy].toUpperCase()) {
        return activeSortDirection === 'descending' ? 1 : -1;
      }
      if (a[activeSortBy].toUpperCase() > b[activeSortBy].toUpperCase()) {
        return activeSortDirection === 'descending' ? -1 : 1;
      }
      return 0;
    })
  )
);

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case REQUEST_TIME_ENTRIES_SUCCESS:
      return { ...state, isLoading: false, items: action.timeEntries };
    case ADD_NEW_TIME_ENTRY:
      return { ...state, isLoading: true };
    case ADD_NEW_TIME_ENTRY_SUCCESS:
      return { ...state, isLoading: false, items: [action.newTimeEntry, ...state.items] };
    case DELETE_TIME_ENTRY:
      return { ...state, isLoading: true };
    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: state.items.filter((currentEntry) => currentEntry.id !== action.id)
      };
    case FILTER_CHANGE_TIME_ENTRIES:
      return { ...state, activeFilter: action.selectedFilter };
    case LEAVING_TIMESHEETS_PAGE:
      return { ...state, activeFilter: '' };
    default:
      return state;
  }
}

export const returnToDefault = () => ({
  type: LEAVING_TIMESHEETS_PAGE
});

export const changeActiveFilter = (selectedFilter) => ({
  type: FILTER_CHANGE_TIME_ENTRIES,
  selectedFilter
});

export const requestTimeEntries = () => ({
  type: REQUEST_TIME_ENTRIES
});

export const requestTimeEntriesSuccess = (timeEntries) => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  timeEntries
});

export const addNewTimeEntry = (newTimeEntry) => ({
  type: ADD_NEW_TIME_ENTRY,
  newTimeEntry
});

export const addNewTimeEntrySuccess = (newTimeEntry) => ({
  type: ADD_NEW_TIME_ENTRY_SUCCESS,
  newTimeEntry
});

export const deleteTimeEntry = (id) => ({
  type: DELETE_TIME_ENTRY,
  id
});

export const deleteTimeEntrySuccess = (id) => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  id
});
