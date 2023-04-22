import axios from 'axios';
import { FETCH_DELICACIES, setDelicaciesList } from '../actions/delicacies';

const delicaciesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DELICACIES:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/delicacies-media')
        .then((res) => {
          store.dispatch(setDelicaciesList(res.data));
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

export default delicaciesMiddleware;
