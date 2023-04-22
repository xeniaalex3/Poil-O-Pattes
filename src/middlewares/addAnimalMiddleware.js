import axios from 'axios';
import { setAnimalRegister, ANIMAL_REGISTER } from '../actions/animalRegister';

const addAnimalMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ANIMAL_REGISTER: {
      const {
        animalName,
        dogBreed,
        age,
        weight,
      } = store.getState().animalRegister.animalRegisterForm;

      if (animalName !== '') {
      axios.post(`https://poilsopattesbackend.raffiskender.com/wp-json/wp/v2/dog?author=${JSON.parse(window.localStorage.getItem('user')).user_id}&_embed=true`, {
        title: animalName,
        author: (JSON.parse(window.localStorage.getItem('user')).user_id),
        breed: dogBreed,
        age: age,
        weight: weight,
        status: 'publish',
      }, {
        headers: {
          Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('user')).token}`,
        },
      })
        .then((res) => {
         // console.log(res);

          //  localStorage.setItem('appointement', JSON.stringify(res.data));
          store.dispatch(setAnimalRegister());
        })
        .catch((error) => {
          console.log(error);
        });
      }
      break;
    }

    default:
      next(action);
  }
};

export default addAnimalMiddleware;
