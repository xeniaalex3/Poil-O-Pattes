import axios from 'axios';
import { FETCH_WEIGHTS, setWeightsList } from '../actions/weights';

const weightsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_WEIGHTS:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/weight?orderby=id&per_page=32')
        .then((res) => {
          store.dispatch(setWeightsList(res.data));
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

export default weightsMiddleware;
