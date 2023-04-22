import { Link } from 'react-router-dom';
import './style.scss';

function Categories() {
  return (

    <main className="categories">
      <div className="categories-box">
        <Link to="/salon">Le Salon</Link>
      </div>
      <div className="categories-box">
        <Link to="/services">Services</Link>
      </div>
      <div className="categories-box">
        <Link to="/catalogue">Catalogue</Link>
      </div>
      <div className="categories-box">
        <Link to="/avis">Avis client</Link>
      </div>
    </main>

  );
}

export default Categories;
