import axios from 'axios';
import { APPOINTEMENT, setAppointement } from '../actions/appointement';

const appointementMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case APPOINTEMENT: {
      const {
        times,
        dates,
        dogId,
      } = store.getState().appointement.appointementForm;

      
      axios.post('https://poilsopattesbackend.raffiskender.com/wp-json/poils-o-pattes/v1/calendar', {
        customerId: (JSON.parse(window.localStorage.getItem('user')).user_id),
        dogId: dogId,
        skatholerId: '0',
        day: dates,
        startTime: times,
        stopTime: '00:00:00',
      },{
        headers: {
          Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('user')).token}`,
        },
      })
        .then((res) => {
          console.log(res);

          //  localStorage.setItem('appointement', JSON.stringify(res.data));
          store.dispatch(setAppointement());
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

export default appointementMiddleware;
