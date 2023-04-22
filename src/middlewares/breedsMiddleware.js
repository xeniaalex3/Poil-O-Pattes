import axios from 'axios';
import { FETCH_BREEDS, setBreedsList } from '../actions/breeds';

const breedsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BREEDS:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/breed?per_page=50')
        .then((res) => {
          store.dispatch(setBreedsList(res.data));
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

export default breedsMiddleware;
