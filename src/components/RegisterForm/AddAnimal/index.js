import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { changeAnimalRegisterField, animalRegister } from '../../../actions/animalRegister';
import SelectBreed from '../SelectBreed';
import SelectYear from '../SelectYear';
import SelectWeight from '../SelectWeight';
import Field from '../Field';
import './style.scss';
import { fetchBreeds } from '../../../actions/breeds';
import { fetchWeights } from '../../../actions/weights';
import { fetchYears } from '../../../actions/years';

function AddAnimal() {
  const dispatch = useDispatch();

  const {
    animalName,
    dogBreed,
    age,
    weight,
  } = useSelector((state) => state.animalRegister.animalRegisterForm);

  // input control
  const [ErrorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    if (animalName !== '') {
      setErrorMessage(false);
    }
    else {
      setErrorMessage(true);
    }
  }, [animalName]);

  // Validate Pop-up
  const [validate, setValidate] = useState(false);
  const handleValidate = () => {
    if (animalName !== '') {
      setValidate(true);
    }
    else {
      setValidate(false);
    }
  };
  const cssClass = validate ? 'validate-popup' : 'validate-popup-hide';

  useEffect(() => {
    dispatch(fetchBreeds());
    dispatch(fetchYears());
    dispatch(fetchWeights());
  }, []);

  const handleAnimalRegister = () => {
    dispatch(animalRegister());
  };

  const handleChangeAnimalRegisterField = (value, key) => {
    dispatch(changeAnimalRegisterField(value, key));
  };

  const handleAnimalSubmit = (evt) => {
    evt.preventDefault();
    handleAnimalRegister();
  };

  return (

    <div className="add-form">

      <div className="add-form-animal">
        <h3> Ajouter un animal </h3>
        <form autoComplete="off" onSubmit={handleAnimalSubmit}>
          {ErrorMessage ? <div className="add-form-obligatory"> Champs obligatoires </div> : ''}
          {ErrorMessage ? <div className="add-form-star"> * </div> : ''}
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

        <div className="add-form-submit">
          <button type="submit" onClick={(e) => handleValidate(e.target.validate)}>
            Ajouter
          </button>
        </div>
        </form>
      </div>
      <div className={cssClass}>
        <h2 className="validate-popup-title">Votre Animal</h2>
        <p className="validate-popup-text">Votre animal a bien été ajouté </p>
        <p className="validate-popup-text">Retrouvez vos animaux sur</p>
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

export default AddAnimal;
