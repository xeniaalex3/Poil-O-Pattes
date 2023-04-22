import axios from 'axios';
import { FETCH_BEAUTY_PRODUCTS, setBeautyProductsList } from '../actions/beautyProducts';

const beautyProductsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BEAUTY_PRODUCTS:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/beauty-products-media')
        .then((res) => {
          store.dispatch(setBeautyProductsList(res.data));
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

export default beautyProductsMiddleware;
