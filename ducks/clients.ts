import { createSelector } from 'reselect';

export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'REQUEST_CLIENTS_SUCCESS';
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT';
export const ADD_NEW_CLIENT_SUCCESS = 'ADD_NEW_CLIENT_SUCCESS';
export const FILTER_CHANGE_CLIENTS = 'FILTER_CHANGE_CLIENTS';
export const LEAVING_CLIENTS_PAGE = 'LEAVING_CLIENTS_PAGE';
export const SORT_BY_CLIENTS = 'SORT_BY_CLIENTS';
export const SORT_DIRECTION_CLIENTS = 'SORT_DIRECTION_CLIENTS';

export interface ClientModel {
  id: string;
  name?: string;
  clientName?: string;
  kvkNumber?: string;
  remarks?: string;
  address?: string;
  zip?: string;
  city?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
}

interface ClientsState {
  items: ClientModel[];
  error: string;
  isLoading: boolean;
  activeFilter: string;
  activeSortBy: string;
  activeSortDirection: string;
}

const initialState: ClientsState = {
  items: [],
  error: null,
  isLoading: false,
  activeFilter: '',
  activeSortBy: 'clientName',
  activeSortDirection: 'ascending'
};

const clientsRootSelector = (state) => state.clients;

export const clientsItemsSelector = createSelector(
  clientsRootSelector,
  (clients) => clients.items
);

const clientsActiveFilterSelector = createSelector(
  clientsRootSelector,
  (clients) => clients.activeFilter
);

const clientsActiveSortBySelector = createSelector(
  clientsRootSelector,
  (clients) => clients.activeSortBy
);

const clientsActiveSortDirectionSelector = createSelector(
  clientsRootSelector,
  (clients) => clients.activeSortDirection
);

export const clientsPageHeaderFilterSelector = createSelector(
  clientsItemsSelector,
  (items) => items.map(
    (item) => ({ id: item.clientName, name: item.clientName })
  )
);

export const clientsSelector = createSelector(
  [
    clientsItemsSelector,
    clientsActiveFilterSelector,
    clientsActiveSortBySelector,
    clientsActiveSortDirectionSelector
  ],
  (items, activeFilter, activeSortBy, activeSortDirection) => (
    (items.filter((item) => !activeFilter
      || item.clientName === activeFilter
      || item.city === activeFilter)
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

export function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CLIENTS:
      return { ...state, isLoading: true };
    case REQUEST_CLIENTS_SUCCESS:
      return { ...state, isLoading: false, items: action.clients };
    case ADD_NEW_CLIENT:
      return { ...state, isLoading: true };
    case ADD_NEW_CLIENT_SUCCESS:
      return { ...state, isLoading: false, items: [action.newClient, ...state.items] };
    case FILTER_CHANGE_CLIENTS:
      return { ...state, activeFilter: action.selectedFilter };
    case LEAVING_CLIENTS_PAGE:
      return { ...state, activeFilter: '' };
    case SORT_BY_CLIENTS:
      return { ...state, activeSortBy: action.activeSortBy };
    case SORT_DIRECTION_CLIENTS:
      return { ...state, activeSortDirection: action.activeSortDirection };
    default:
      return state;
  }
}

export const sortDirectionClients = (activeSortDirection) => ({
  type: SORT_DIRECTION_CLIENTS,
  activeSortDirection
});

export const sortByClients = (activeSortBy) => ({
  type: SORT_BY_CLIENTS,
  activeSortBy
});

export const returnToDefault = () => ({
  type: LEAVING_CLIENTS_PAGE
});

export const requestClients = () => ({
  type: REQUEST_CLIENTS
});

export const requestClientsSuccess = (clients) => ({
  type: REQUEST_CLIENTS_SUCCESS,
  clients
});

export const addNewClient = (newClient) => ({
  type: ADD_NEW_CLIENT,
  newClient
});

export const addNewClientSuccess = (newClient) => ({
  type: ADD_NEW_CLIENT_SUCCESS,
  newClient
});

export const changeActiveFilter = (selectedFilter) => ({
  type: FILTER_CHANGE_CLIENTS,
  selectedFilter
});
