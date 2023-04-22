import { CHANGE_ANIMAL_REGISTER_FIELD, SET_ANIMAL_REGISTER } from '../actions/animalRegister';

export const initialState = {
  token: '',

  animalRegisterForm: {
    animalName: '',
    dogBreed: '',
    age: '',
    weight: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ANIMAL_REGISTER_FIELD:
      return {
        ...state,
        animalRegisterForm: {
          ...state.animalRegisterForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case SET_ANIMAL_REGISTER:
      return {
        ...state,
        token: action.payload.token,
        animalRegisterForm: {
          animalName: '',
          dogBreed: '',
          age: '',
          weight: '',
        },
      };

    default:
      return state;
  }
};

export default reducer;
