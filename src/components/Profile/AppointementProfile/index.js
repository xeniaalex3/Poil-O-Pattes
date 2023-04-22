import PropTypes from 'prop-types';
import './style.scss';

function AppointementProfile({
  dates,
  times,
  dogName,
}) {
  return (
    <div>
      <div className="profile-informations">
        <p><span>Date:</span> {dates}</p>
        <p><span>Heure:</span> {times}</p>
        <p><span>Pour:</span> {dogName}</p>
      </div>
      <div className="profile-button">
        <a className="profile-button-edit" href="#">Modifier</a>
        <button type="submit" className="profile-button-delete">Supprimer</button>
      </div>
    </div>

  );
}
AppointementProfile.propTypes = {
  times: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  dogName: PropTypes.string.isRequired,
};
export default AppointementProfile;
