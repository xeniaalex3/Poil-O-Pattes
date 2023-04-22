export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST';
export const setProductsList = (products) => ({
  type: SET_PRODUCTS_LIST,
  payload: { products: products },
});
