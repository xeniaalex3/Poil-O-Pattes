export const CHANGE_REGISTER_FIELD = 'CHANGE_REGISTER_FIELD';
export const changeRegisterField = (value, key) => ({
  type: CHANGE_REGISTER_FIELD,
  payload: {
    value,
    key,
  },
});

export const REGISTER = 'REGISTER';
export const register = () => ({
  type: REGISTER,
});

export const SET_REGISTER = 'SET_REGISTER'; // fetch for call API
export const setRegister = (token) => ({
  type: SET_REGISTER,
  payload: {
    token,
  },
});
