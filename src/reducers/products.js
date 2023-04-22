import { SET_PRODUCTS_LIST } from '../actions/products';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        list: action.payload.products,

      };

    default:
      return state;
  }
};

export default reducer;
