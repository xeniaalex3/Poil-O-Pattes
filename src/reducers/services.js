import { SET_SERVICES_LIST } from '../actions/services';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SERVICES_LIST:
      return {
        ...state,
        list: action.payload.services,

      };

    default:
      return state;
  }
};

export default reducer;
