export const FETCH_APPOINTEMENT = 'FETCH_APPOINTEMENT';
export const fetchAppointement = () => ({
  type: FETCH_APPOINTEMENT,
});

export const SET_APPOINTEMENT_LIST = 'SET_APPOINTEMENT_LIST';
export const setAppointementList = (appointements) => ({
  type: SET_APPOINTEMENT_LIST,
  payload: { appointements: appointements },
});
