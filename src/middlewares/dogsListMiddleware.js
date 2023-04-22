import axios from 'axios';
import { FETCH_DOGS, setDogsList } from '../actions/dogsList';

const dogsListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DOGS: {
      axios
        .get(
          `https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/dog?author=${JSON.parse(window.localStorage.getItem('user')).user_id}&_embed=true`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('user')).token}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(setDogsList(res.data));
        //  console.log(res.data);
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

export default dogsListMiddleware;
