export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const changeLoginField = (value, key) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    value,
    key,
  },
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const SET_USER = 'SET_USER'; // fetch for call API
export const setUser = (token) => ({
  type: SET_USER,
  payload: {
    token,
  },
});
