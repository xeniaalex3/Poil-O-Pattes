import { combineReducers } from 'redux';

import userReducer from './user';
import catalogMediaReducer from './catalogMedia';
import registerReducer from './register';
import animalRegisterReducer from './animalRegister';
import breedsReducer from './breeds';
import yearsReducer from './years';
import weightsReducer from './weights';
import appointementReducer from './appointement';
import timesReducer from './times';
import accessoriesReducer from './accessories';
import beautyProductsReducer from './beautyProducts';
import delicaciesReducer from './delicacies';
import productsReducer from './products';
import galleryMediaReducer from './galleryMedia';
import servicesReducer from './services';
import servicesMediaReducer from './servicesMedia';
import dogsListReducer from './dogsList';
import usersListReducer from './usersList';
import appointementListReducer from './appointementList';

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  animalRegister: animalRegisterReducer,
  breeds: breedsReducer,
  years: yearsReducer,
  weights: weightsReducer,
  appointement: appointementReducer,
  times: timesReducer,
  catalogMedia: catalogMediaReducer,
  accessories: accessoriesReducer,
  beautyProducts: beautyProductsReducer,
  delicacies: delicaciesReducer,
  products: productsReducer,
  galleryMedia: galleryMediaReducer,
  services: servicesReducer,
  servicesMedia: servicesMediaReducer,
  dogsList: dogsListReducer,
  usersList: usersListReducer,
  appointementList: appointementListReducer,

});

export default rootReducer;
