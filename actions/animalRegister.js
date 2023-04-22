export const CHANGE_ANIMAL_REGISTER_FIELD = 'CHANGE_ANIMAL_REGISTER_FIELD';
export const changeAnimalRegisterField = (value, key) => ({
  type: CHANGE_ANIMAL_REGISTER_FIELD,
  payload: {
    value,
    key,
  },
});

export const ANIMAL_REGISTER = 'ANIMAL_REGISTER';
export const animalRegister = () => ({
  type: ANIMAL_REGISTER,
});

export const SET_ANIMAL_REGISTER = 'SET_ANIMAL_REGISTER'; // fetch for call API
export const setAnimalRegister = (token) => ({
  type: SET_ANIMAL_REGISTER,
  payload: {
    token,
  },
});
