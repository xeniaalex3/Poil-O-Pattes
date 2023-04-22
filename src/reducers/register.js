import { CHANGE_REGISTER_FIELD, SET_REGISTER } from '../actions/register';

export const initialState = {
  token: '',

  registerForm: {
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    confirmationPassword: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTER_FIELD:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.key]: action.payload.value,
        },
      };

    case SET_REGISTER:
      return {
        ...state,
        token: action.payload.token,
        registerForm: {
          lastName: '',
          firstName: '',
          email: '',
          password: '',
          confirmationPassword: '',
        },
      };

    default:
      return state;
  }
};

export default reducer;
