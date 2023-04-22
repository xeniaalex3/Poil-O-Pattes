import { SET_CATALOG_LIST } from '../actions/catalogMedia';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATALOG_LIST:
      return {
        ...state,
        list: action.payload.catalog,

      };

    default:
      return state;
  }
};

export default reducer;
