export const FETCH_WEIGHTS = 'FETCH_WEIGHTS';
export const fetchWeights = () => ({
  type: FETCH_WEIGHTS,
});

export const SET_WEIGHTS_LIST = 'SET_WEIGHTS_LIST';
export const setWeightsList = (weights) => ({
  type: SET_WEIGHTS_LIST,
  payload: { weights: weights },
});
