import { SET_TIME_LIST } from '../actions/times';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TIME_LIST:
      return {
        ...state,
        list: action.payload.times,

      };

    default:
      return state;
  }
};

export default reducer;
