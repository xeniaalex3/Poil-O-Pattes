import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Time from './Time';
import Calendar from './Calendar';
import DogSelect from './DogSelect';
import { fetchTime } from '../../actions/times';
import { fetchDogs } from '../../actions/dogsList';
import { changeAppointementField, appointement } from '../../actions/appointement';

import './style.scss';

function Appointement() {
  const dispatch = useDispatch();
  const { times, dates, dogId } = useSelector((state) => state.appointement.appointementForm);

  // appointement function Post
  const handleChangeAppointementField = (value, key) => {
    dispatch(changeAppointementField(value, key));
    dispatch(fetchTime());
    dispatch(fetchDogs());
  };
  const handleAppointement = () => {
    dispatch(appointement());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAppointement();

    console.log('send appointement form');
  };

  // Validate Pop-up
  const [validate, setValidate] = useState(false);
  const handleValidate = () => {
    if (times !== '' && dates !== '') {
      setValidate(true);
    }
    else {
      setValidate(false);
    }
  };
  const cssClass = validate ? 'validate-popup' : 'validate-popup-hide';

  return (
    <div className="calendar">

      <h2 className="calendar-title">Prendre rendez-vous</h2>
      <form autoComplete="off" className="login-form-elements" onSubmit={handleSubmit}>
        <div className="calendar-box">

          <label htmlFor="appt-date" className="label-date"> Choisir une date : </label>

          <Calendar
            type="date"
            name="dates"
            min="2022-01-01"
            max="2030-12-31"
            value={dates}
            onChange={handleChangeAppointementField}
            className="input-calendar"
          />
          <label htmlFor="appt-time" className="label-time"> Choisir une heure de rendez-vous : </label>
          <Time
            type="select"
            name="times"
            onChange={handleChangeAppointementField}
            value={times}
            className="input-time"
          />
          <label htmlFor="appt-date" className="label-date"> Choisir votre animal : </label>
          <DogSelect
            type="select"
            name="dogId"
            value={dogId}
            onChange={handleChangeAppointementField}
            className="input-dog"
          />
        </div>
        <button type="submit" className="button-submits" onClick={(e) => handleValidate(e.target.validate)}>Réserver</button>
      </form>

      <div className={cssClass}>
        <h2 className="validate-popup-title">Votre rendez-vous</h2>
        <p className="validate-popup-text">Votre réservation a bien été enregistrée !</p>
        <p className="validate-popup-text">Retrouvez vos rendez-vous sur</p>
        <Link to="/profil" className="validate-popup-profile">
          Mon profil
        </Link>
        <Link to="/" className="validate-popup-home">
          Accueil
        </Link>
      </div>

    </div>
  );
}

export default Appointement;
