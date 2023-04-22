export const FETCH_ACCESSORIES = 'FETCH_ACCESSORIES';
export const fetchAccessories = () => ({
  type: FETCH_ACCESSORIES,
});

export const SET_ACCESSORIES_LIST = 'SET_ACCESSORIES_LIST';
export const setAccessoriesList = (accessories) => ({
  type: SET_ACCESSORIES_LIST,
  payload: { accessories: accessories },
});
