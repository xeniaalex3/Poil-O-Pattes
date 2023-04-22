import axios from 'axios';
import { FETCH_YEARS, setYearsList } from '../actions/years';

const yearsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_YEARS:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/age?per_page=21')
        .then((res) => {
          store.dispatch(setYearsList(res.data));
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

export default yearsMiddleware;
