export const FETCH_BEAUTY_PRODUCTS = 'FETCH_BEAUTY_PRODUCTS';
export const fetchBeautyProducts = () => ({
  type: FETCH_BEAUTY_PRODUCTS,
});

export const SET_BEAUTY_PRODUCTS_LIST = 'SET_BEAUTY_PRODUCTS_LIST';
export const setBeautyProductsList = (beautyProducts) => ({
  type: SET_BEAUTY_PRODUCTS_LIST,
  payload: { beautyProducts: beautyProducts },
});
