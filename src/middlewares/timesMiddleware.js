import axios from 'axios';
import { FETCH_TIME, setTimeList } from '../actions/times';

const timesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TIME: {
      const { dates } = store.getState().appointement.appointementForm;
      axios
        .get(`https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/calendar/day/${dates.split('-').join('')}`)
        .then((res) => {
          store.dispatch(setTimeList(res.data));
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default timesMiddleware;
