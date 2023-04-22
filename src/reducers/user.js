import { CHANGE_LOGIN_FIELD, LOGOUT, SET_USER } from '../actions/user';

export const initialState = {
  logged: false,
  token: '',

  loginForm: {
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.key]: action.payload.value,
        },
      };

    case SET_USER:
      return {
        ...state,
        logged: true,
        token: action.payload.token,
      };

    case LOGOUT:
      return {
        ...state,

        logged: false,
        token: '',

        loginForm: {
          email: '',
          password: '',
        },
      };

    default:
      return state;
  }
};

export default reducer;
