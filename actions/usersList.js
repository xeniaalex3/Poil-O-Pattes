export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const SET_USERS_LIST = 'SET_USERS_LIST';
export const setUsersList = (users) => ({
  type: SET_USERS_LIST,
  payload: { users: users },
});
