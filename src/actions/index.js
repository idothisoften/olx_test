import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { getPage } from '../serverMock';

export const LOAD_PAGE = 'LOAD_PAGE';
export const LOAD_PAGE_PENDING = `${LOAD_PAGE}_${PENDING}`;
export const LOAD_PAGE_FULFILLED = `${LOAD_PAGE}_${FULFILLED}`;
export const LOAD_PAGE_REJECTED = `${LOAD_PAGE}_${REJECTED}`;

export const NAVIGATE_PAGE = 'NAVIGATE_PAGE';

export const loadPage = (id) => {
  return {
    type: LOAD_PAGE,
    meta: { id },
    payload: getPage(id)
  }
};

export const navigatePage = (id) => (dispatch) => {
  dispatch({
    type: NAVIGATE_PAGE,
    id
  });
  dispatch(loadPage(id));
};
