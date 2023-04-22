import axios from 'axios';
import { FETCH_APPOINTEMENT, setAppointementList } from '../actions/appointementList';

const appointementListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_APPOINTEMENT: {
      axios
        .get(
          `https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/calendar/customer/${JSON.parse(window.localStorage.getItem('user')).user_id}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('user')).token}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(setAppointementList(res.data));
         // console.log(res.data);
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

export default appointementListMiddleware;
