export const FETCH_GALLERY = 'FETCH_GALLERY';
export const fetchGallery = () => ({
  type: FETCH_GALLERY,
});

export const SET_GALLERY_LIST = 'SET_GALLERY_LIST';
export const setGalleryList = (gallery) => ({
  type: SET_GALLERY_LIST,
  payload: { gallery: gallery },
});
