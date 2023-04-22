import { SET_USERS_LIST } from '../actions/usersList';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        list: action.payload.users,

      };

    default:
      return state;
  }
};

export default reducer;
