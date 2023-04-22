import axios from 'axios';
import { LOGIN, LOGOUT, setUser } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState().user.loginForm;

      // I send my request in post via axios on https://poilsopattesbackend.raffiskender.com/wp-json/jwt-auth/v1/token(WP)

      axios.post('https://poilsopattesbackend.raffiskender.com/wp-json/jwt-auth/v1/token', {
        username: email,
        password: password,
      })
        .then((res) => {
          const { token } = res.data;
          // localStorage only accepts strings!
          // so we need to turn our goal into a string via JSON.stringify
          localStorage.setItem('user', JSON.stringify(res.data));
          store.dispatch(setUser(token));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          }
          else if (err.request) {
            // The client never received a response, and the request was never left
            console.log(err.request);
          }
        });

      // If successful
      // ?
      // If it fails
      // I show an error
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('user');
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
