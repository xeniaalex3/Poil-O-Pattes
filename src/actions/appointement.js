export const CHANGE_APPOINTEMENT_FIELD = 'CHANGE_APPOINTEMENT_FIELD';
export const changeAppointementField = (value, key) => ({
  type: CHANGE_APPOINTEMENT_FIELD,
  payload: {
    value,
    key,
  },
});

export const APPOINTEMENT = 'APPOINTEMENT';
export const appointement = () => ({
  type: APPOINTEMENT,
});

export const SET_APPOINTEMENT = 'SET_APPOINTEMENT'; // fetch for call API
export const setAppointement = () => ({
  type: SET_APPOINTEMENT,
});
