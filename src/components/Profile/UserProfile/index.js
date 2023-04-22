import PropTypes from 'prop-types';
import './style.scss';

function UserProfile({
  name,
  email,
}) {
  return (
    <div>
      <div className="profile-informations">
        <p><span>Prénom et Nom:</span> {name} </p>
        <p><span>E-mail:</span> {email} </p>
      </div>
      <a className="profile-button--label" id="edit" href="#">Modifier mon profil</a>
    </div>

  );
}
UserProfile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

UserProfile.defaultProps = {
  name: '',
  email: '',
};
export default UserProfile;
