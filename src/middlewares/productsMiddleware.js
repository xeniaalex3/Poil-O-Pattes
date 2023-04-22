import axios from 'axios';
import { FETCH_PRODUCTS, setProductsList } from '../actions/products';

const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/product?_embed=true&per_page=50')
        .then((res) => {
          store.dispatch(setProductsList(res.data));
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

export default productsMiddleware;
