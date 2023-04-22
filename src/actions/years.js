export const FETCH_YEARS = 'FETCH_YEARS';
export const fetchYears = () => ({
  type: FETCH_YEARS,
});

export const SET_YEARS_LIST = 'SET_YEARS_LIST';
export const setYearsList = (years) => ({
  type: SET_YEARS_LIST,
  payload: { years: years },
});
