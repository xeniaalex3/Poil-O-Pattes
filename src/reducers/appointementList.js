import { SET_APPOINTEMENT_LIST } from '../actions/appointementList';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_APPOINTEMENT_LIST:
      return {
        ...state,
        list: action.payload.appointements,

      };

    default:
      return state;
  }
};

export default reducer;
