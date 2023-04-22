import axios from 'axios';
import { FETCH_CATALOG, setCatalogList } from '../actions/catalogMedia';

const catalogMediaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATALOG:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/catalog-media')
        .then((res) => {
          store.dispatch(setCatalogList(res.data));
        //  console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default catalogMediaMiddleware;
