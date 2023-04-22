import { SET_WEIGHTS_LIST } from '../actions/weights';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WEIGHTS_LIST:
      return {
        ...state,
        list: action.payload.weights,

      };

    default:
      return state;
  }
};

export default reducer;
