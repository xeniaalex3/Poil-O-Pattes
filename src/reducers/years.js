import { SET_YEARS_LIST } from '../actions/years';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_YEARS_LIST:
      return {
        ...state,
        list: action.payload.years,

      };

    default:
      return state;
  }
};

export default reducer;
