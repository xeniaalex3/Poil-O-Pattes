export const FETCH_BREEDS = 'FETCH_BREEDS';
export const fetchBreeds = () => ({
  type: FETCH_BREEDS,
});

export const SET_BREEDS_LIST = 'SET_BREEDS_LIST';
export const setBreedsList = (breeds) => ({
  type: SET_BREEDS_LIST,
  payload: { breeds: breeds },
});
