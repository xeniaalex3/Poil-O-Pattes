import { Link } from 'react-router-dom';
import img from '../../../assets/images/error404.jpg';
import './style.scss';

function Error404() {
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <img className="error-picture" src={img} alt="Logo du chien qui pleure 404" />
      <p className="error-text">Oups!</p>
      <p className="error-text">La page demandée n'a pas été trouvé</p>
      <Link to="/" className="error-link"> Retour à l'accueil </Link>
    </div>
  );
}

export default Error404;
