import axios from 'axios';
import { FETCH_SERVICES_MEDIA, setServicesMediaList } from '../actions/servicesMedia';

const servicesMediaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERVICES_MEDIA:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/services-media')
        .then((res) => {
          store.dispatch(setServicesMediaList(res.data));
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

export default servicesMediaMiddleware;
