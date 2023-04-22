export const FETCH_DELICACIES = 'FETCH_DELICACIES';
export const fetchDelicacies = () => ({
  type: FETCH_DELICACIES,
});

export const SET_DELICACIES_LIST = 'SET_DELICACIES_LIST';
export const setDelicaciesList = (delicacies) => ({
  type: SET_DELICACIES_LIST,
  payload: { delicacies: delicacies },
});
