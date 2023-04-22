import { SET_DELICACIES_LIST } from '../actions/delicacies';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DELICACIES_LIST:
      return {
        ...state,
        list: action.payload.delicacies,

      };

    default:
      return state;
  }
};

export default reducer;
