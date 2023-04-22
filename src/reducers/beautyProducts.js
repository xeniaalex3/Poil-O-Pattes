import { SET_BEAUTY_PRODUCTS_LIST } from '../actions/beautyProducts';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BEAUTY_PRODUCTS_LIST:
      return {
        ...state,
        list: action.payload.beautyProducts,

      };

    default:
      return state;
  }
};

export default reducer;
