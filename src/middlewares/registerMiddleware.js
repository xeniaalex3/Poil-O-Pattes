import axios from 'axios';
import { REGISTER, setRegister } from '../actions/register';
import { setAnimalRegister } from '../actions/animalRegister';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const {
        lastName,
        firstName,
        email,
        password,
      } = store.getState().register.registerForm;

      const {
        animalName,
        dogBreed,
        age,
        weight,
      } = store.getState().animalRegister.animalRegisterForm;

      axios.post('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/users', {
        last_name: lastName,
        first_name: firstName,
        email: email,
        username: firstName,
        password: password,
        roles: 'customer',
      })
        .then((res) => {
          //console.log(res);

          axios.post('https://poilsopattesbackend.raffiskender.com/wp-json/jwt-auth/v1/token', {
            username: email,
            password: password,
          })
            .then((res2) => {
              const { token } = res2.data;
            //  console.log(res2);
              // localStorage.setItem('register', JSON.stringify(res2.data));
              store.dispatch(setRegister(token));
              if (animalName !== '') {
                axios.post('https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/dog', {
                  title: animalName,
                  author: res2.data.user_id,
                  breed: dogBreed,
                  age: age,
                  weight: weight,
                  status: 'publish',
                }, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then((res3) => {
                   // console.log(res3);
                    //  localStorage.setItem('animalRegister', JSON.stringify(res3.data));
                    store.dispatch(setAnimalRegister(token));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            })
            .catch((err) => {
              console.err(err);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default registerMiddleware;
