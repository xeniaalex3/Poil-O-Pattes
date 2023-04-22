import logo from 'src/assets/images/paw-icon.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/actions/user';
import './style.scss';

function Header() {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <Link to="/">  <img className="header-logo" id="logo" src={logo} alt="Logo PoilOpattes" /> </Link>
      <h1> Poil O'Pattes </h1>
      <div className="login-form-logged">
        {logged && (
        <div>
          <Link to="/profil" className="login-form-message">
            {`Bonjour, ${JSON.parse(window.localStorage.getItem('user')).user_display_name} !`}
          </Link>
          <Link
            to="/"
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </Link>
        </div>
        )}
        {!logged && (

        <Link className="logged-button" id="button-connect" to="/se-connecter">Connexion</Link>

        )}
      </div>
    </header>
  );
}

export default Header;
