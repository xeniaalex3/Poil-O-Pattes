import { SET_DOGS_LIST } from '../actions/dogsList';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DOGS_LIST:
      return {
        ...state,
        list: action.payload.dogs,

      };

    default:
      return state;
  }
};

export default reducer;
