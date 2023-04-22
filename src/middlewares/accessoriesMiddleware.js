import axios from 'axios';
import { FETCH_ACCESSORIES, setAccessoriesList } from '../actions/accessories';

const accessoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACCESSORIES:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/accessories-media')
        .then((res) => {
          store.dispatch(setAccessoriesList(res.data));
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

export default accessoriesMiddleware;
