import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import userMiddleware from '../middlewares/userMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import breedsMiddleware from '../middlewares/breedsMiddleware';
import yearsMiddleware from '../middlewares/yearsMiddleware';
import weightsMiddleware from '../middlewares/weightsMiddleware';
import appointementMiddleware from '../middlewares/appointementMiddleware';
import dogsListMiddleware from '../middlewares/dogsListMiddleware';
import timesMiddleware from '../middlewares/timesMiddleware';
import accessoriesMiddleware from '../middlewares/accessoriesMiddleware';
import beautyProductsMiddleware from '../middlewares/beautyProductsMiddleware';
import catalogMediaMiddleware from '../middlewares/catalogMediaMiddleware';
import delicaciesMiddleware from '../middlewares/delicaciesMiddleware';
import productsMiddleware from '../middlewares/productsMiddleware';
import galleryMediaMiddleware from '../middlewares/galleryMediaMiddleware';
import servicesMediaMiddleware from '../middlewares/servicesMediaMiddleware';
import servicesMiddleware from '../middlewares/servicesMiddleware';
import usersListMiddleware from '../middlewares/usersListMiddleware';
import appointementListMiddleware from '../middlewares/appointementListMiddleware';
import addAnimalMiddleware from '../middlewares/addAnimalMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
    registerMiddleware,
    breedsMiddleware,
    yearsMiddleware,
    weightsMiddleware,
    appointementMiddleware,
    dogsListMiddleware,
    timesMiddleware,
    accessoriesMiddleware,
    beautyProductsMiddleware,
    catalogMediaMiddleware,
    delicaciesMiddleware,
    productsMiddleware,
    galleryMediaMiddleware,
    servicesMediaMiddleware,
    servicesMiddleware,
    usersListMiddleware,
    appointementListMiddleware,
    addAnimalMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
