import PropTypes from 'prop-types';
import './style.scss';

function DogProfile({
  animalName,
  dogBreed,
  age,
  weight,
}) {
  return (
    <div>
      <div className="profile-informations">
        <p><span>Nom:</span> {animalName}</p>
        <p><span>Race:</span> {dogBreed} </p>
        <p><span>Année de naissance:</span> {age} </p>
        <p><span>Poids:</span> {weight}  </p>
      </div>
      <div className="profile-button">
        <a className="profile-button-edit" href="#">Modifier</a>
        <button type="submit" className="profile-button-delete">Supprimer</button>
      </div>
    </div>

  );
}
DogProfile.propTypes = {
  animalName: PropTypes.string.isRequired,
  dogBreed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
export default DogProfile;
