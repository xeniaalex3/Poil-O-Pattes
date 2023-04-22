export const FETCH_DOGS = 'FETCH_DOGS';
export const fetchDogs = () => ({
  type: FETCH_DOGS,
});

export const SET_DOGS_LIST = 'SET_DOGS_LIST';
export const setDogsList = (dogs) => ({
  type: SET_DOGS_LIST,
  payload: { dogs: dogs },
});
