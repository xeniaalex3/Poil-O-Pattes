export const FETCH_CATALOG = 'FETCH_CATALOG';
export const fetchCatalog = () => ({
  type: FETCH_CATALOG,
});

export const SET_CATALOG_LIST = 'SET_CATALOG_LIST';
export const setCatalogList = (catalog) => ({
  type: SET_CATALOG_LIST,
  payload: { catalog: catalog },
});
