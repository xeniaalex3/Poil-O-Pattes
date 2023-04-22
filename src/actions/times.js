export const FETCH_TIME = 'FETCH_TIME';
export const fetchTime = () => ({
  type: FETCH_TIME,
});

export const SET_TIME_LIST = 'SET_TIME_LIST';
export const setTimeList = (times) => ({
  type: SET_TIME_LIST,
  payload: { times: times },
});
