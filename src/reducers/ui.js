import {
  LOAD_PAGE_PENDING,
  LOAD_PAGE_FULFILLED,
  NAVIGATE_PAGE
} from '../actions';

const initialState = {
  loading: {},
  currentPage: null,
  totalPages: null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE_PENDING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.meta.id || 'initial']: true
        }
      };
    case LOAD_PAGE_FULFILLED:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.meta.id || 'initial']: false,
          [action.payload.page]: false
        },
        totalPages: action.payload.total_pages,
        currentPage: state.currentPage == null ? action.payload.page : state.currentPage
      };
    case NAVIGATE_PAGE:
      return {
        ...state,
        currentPage: action.id
      };
    default:
      return state;
  }
};

export default uiReducer;
