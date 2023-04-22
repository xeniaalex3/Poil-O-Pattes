import { Link } from 'react-router-dom';
import './style.scss';
import img from '../../../assets/images/error403.jpg';

function Error403() {
  return (
    <div className="error403">
      <h1 className="error403-title">403</h1>
      <img className="error403-picture" src={img} alt="Logo du chien qui pleure 403" />
      <p className="error403-text">Vous devez être connecté pour pouvoir accéder à cette page</p>
      <Link to="/se-connecter" className="error403-link"> Connectez-vous </Link>
      <p className="error403-or"> || </p>
      <Link to="/s-enregistrer" className="error403-link"> Inscrivez-vous </Link>
    </div>
  );
}

export default Error403;
