import axios from 'axios';
import { FETCH_SERVICES, setServicesList } from '../actions/services';

const servicesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/services')
        .then((res) => {
          store.dispatch(setServicesList(res.data));
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

export default servicesMiddleware;
