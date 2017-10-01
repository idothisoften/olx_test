import { LOAD_PAGE_FULFILLED } from '../actions';

const initialState = {
  ads: {}
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE_FULFILLED:
      return {
        ...state,
        ads: {
          ...state.ads,
          [action.payload.page]: action.payload.ads
        }
      };
    default:
      return state;
  }
};

export default dataReducer;
