import axios from 'axios';
import { FETCH_USERS, setUsersList } from '../actions/usersList';

const usersListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS: {
      axios
        .get(
          `https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/users/${JSON.parse(window.localStorage.getItem('user')).user_id}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('user')).token}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(setUsersList(res.data));
         // console.log(res.data);
          res.data.email = `${JSON.parse(window.localStorage.getItem('user')).user_email}`;
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

export default usersListMiddleware;
