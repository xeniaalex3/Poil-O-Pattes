export const FETCH_SERVICES = 'FETCH_SERVICES';
export const fetchServices = () => ({
  type: FETCH_SERVICES,
});

export const SET_SERVICES_LIST = 'SET_SERVICES_LIST';
export const setServicesList = (services) => ({
  type: SET_SERVICES_LIST,
  payload: { services: services },
});
