import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeRegisterField, register } from 'src/actions/register';
import { useState, useEffect } from 'react';
import { changeAnimalRegisterField } from '../../actions/animalRegister';
import SelectBreed from './SelectBreed';
import SelectYear from './SelectYear';
import SelectWeight from './SelectWeight';
import Field from './Field';
import './style.scss';
import { fetchBreeds } from '../../actions/breeds';
import { fetchWeights } from '../../actions/weights';
import { fetchYears } from '../../actions/years';

function RegisterForm() {
  const dispatch = useDispatch();

  const {
    lastName,
    firstName,
    email,
    password,
    confirmationPassword,
  } = useSelector((state) => state.register.registerForm);

  const {
    animalName,
    dogBreed,
    age,
    weight,
  } = useSelector((state) => state.animalRegister.animalRegisterForm);

  // Password control
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === confirmationPassword) {
        setShowErrorMessage(false);
      }
      else {
        setShowErrorMessage(true);
      }
    }
  }, [confirmationPassword]);

  // input control
  const [ErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (lastName !== '' && firstName !== '' && email !== '' && password !== '' && animalName !== '') {
      setErrorMessage(false);
    }
    else {
      setErrorMessage(true);
    }
  }, [lastName, firstName, email, password, animalName]);

  // checkbox animal form
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  const cssClassCheck = checked ? 'register-form-animal' : 'register-form-hide';

  // Validate Pop-up
  const [validate, setValidate] = useState(false);
  const handleValidate = () => {
    if (lastName !== '' && firstName !== '' && email !== '' && password !== '') {
      setValidate(true);
    }
    else {
      setValidate(false);
    }
  };
  const cssClassValidate = validate ? 'validate-popup' : 'validate-popup-hide';

  useEffect(() => {
    dispatch(fetchBreeds());
    dispatch(fetchYears());
    dispatch(fetchWeights());
  }, []);

  const handleChangeRegisterField = (value, key) => {
    dispatch(changeRegisterField(value, key));
    setIsCPasswordDirty(true);
  };

  const handleRegister = () => {
    dispatch(register());
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
    handleValidate(evt.target.validate);
  };

  const handleChangeAnimalRegisterField = (value, key) => {
    dispatch(changeAnimalRegisterField(value, key));
  };

  return (

    <div className="register-form">

      <div className="register-form-person">
        <h3> S'inscrire </h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="register-form-control">
            {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
            {ErrorMessage ? <div className="register-form-obligatory"> Champs obligatoires </div> : ''}
          </div>
          <Field
            type="text"
            name="lastName"
            placeholder="Nom"
            onChange={handleChangeRegisterField}
            value={lastName}
          />
          {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
          <Field
            type="text"
            name="firstName"
            placeholder="Prénom"
            onChange={handleChangeRegisterField}
            value={firstName}
          />
          {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeRegisterField}
            value={email}
          />
          {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
          <Field
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChangeRegisterField}
            value={password}
          />
          {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
          <Field
            type="password"
            name="confirmationPassword"
            placeholder="Saisir à nouveau le mot de passe"
            onChange={handleChangeRegisterField}
            value={confirmationPassword}
          />
          {showErrorMessage && isCPasswordDirty ? <div className="register-form-check"> Les mots de passe ne correspondent pas </div> : ''}

        </form>
      </div>
      <div className="register-form-box">
        <input
          type="checkbox"
          name="check"
          id="animal"
          checked={checked}
          onChange={(e) => handleChecked(e.target.checked)}
        />
        <label htmlFor="animal"> Enregistrer un animal</label>
      </div>
      <div className={cssClassCheck}>
        <h3> Mon animal </h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {ErrorMessage ? <div className="register-form-star"> * </div> : ''}
          <Field
            type="text"
            name="animalName"
            placeholder="Nom"
            onChange={handleChangeAnimalRegisterField}
            value={animalName}
          />
          <SelectBreed
            type="select"
            name="dogBreed"
            onChange={handleChangeAnimalRegisterField}
            value={dogBreed}
          />
          <SelectYear
            type="select"
            name="age"
            onChange={handleChangeAnimalRegisterField}
            value={age}
          />
          <SelectWeight
            type="select"
            name="weight"
            onChange={handleChangeAnimalRegisterField}
            value={weight}
          />
        </form>

      </div>
      <div className="register-form-submit">
        <button type="submit" onClick={handleSubmit}>
          S'enregistrer
        </button>
      </div>
      <div className={cssClassValidate}>
        <h2 className="validate-popup-title">Inscription</h2>
        <p className="validate-popup-text">Votre inscription a bien été validée !</p>
        <Link to="/se-connecter" className="validate-popup-login">
          Me connecter
        </Link>
      </div>
    </div>

  );
}

export default RegisterForm;
