import { CHANGE_APPOINTEMENT_FIELD, SET_APPOINTEMENT } from '../actions/appointement';

export const initialState = {
  
  appointementForm: {
    times: '',
    dates: '',
    dogId: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_APPOINTEMENT_FIELD:
      return {
        ...state,
        appointementForm: {
          ...state.appointementForm,
          [action.payload.key]: action.payload.value,
        },
      };

    case SET_APPOINTEMENT:
      return {
        ...state,
        appointementForm: {
          times: '',
          dates: '',
          dogId: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
