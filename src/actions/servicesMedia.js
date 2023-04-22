export const FETCH_SERVICES_MEDIA = 'FETCH_SERVICES_MEDIA';
export const fetchServicesMedia = () => ({
  type: FETCH_SERVICES_MEDIA,
});

export const SET_SERVICES_MEDIA_LIST = 'SET_SERVICES_MEDIA_LIST';
export const setServicesMediaList = (servicesMedia) => ({
  type: SET_SERVICES_MEDIA_LIST,
  payload: { servicesMedia: servicesMedia },
});
