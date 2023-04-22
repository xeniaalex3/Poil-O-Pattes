import { SET_SERVICES_MEDIA_LIST } from '../actions/servicesMedia';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SERVICES_MEDIA_LIST:
      return {
        ...state,
        list: action.payload.servicesMedia,

      };

    default:
      return state;
  }
};

export default reducer;
