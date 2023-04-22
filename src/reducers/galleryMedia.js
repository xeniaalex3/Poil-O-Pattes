import { SET_GALLERY_LIST } from '../actions/galleryMedia';

export const initialState = {
  list: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GALLERY_LIST:
      return {
        ...state,
        list: action.payload.gallery,

      };

    default:
      return state;
  }
};

export default reducer;
