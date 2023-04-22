import { SET_ACCESSORIES_LIST } from '../actions/accessories';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACCESSORIES_LIST:
      return {
        ...state,
        list: action.payload.accessories,

      };

    default:
      return state;
  }
};

export default reducer;
