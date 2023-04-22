import { SET_BREEDS_LIST } from '../actions/breeds';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BREEDS_LIST:
      return {
        ...state,
        list: action.payload.breeds,

      };

    default:
      return state;
  }
};

export default reducer;
