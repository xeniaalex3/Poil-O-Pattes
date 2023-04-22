import axios from 'axios';
import { FETCH_GALLERY, setGalleryList } from '../actions/galleryMedia';

const galleryMediaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GALLERY:
      axios
        .get('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/galery-media')
        .then((res) => {
          store.dispatch(setGalleryList(res.data));
        //  console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default galleryMediaMiddleware;
