import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

function Menu() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const { logged } = useSelector((state) => state.user);

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <ul className="navbar__links navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar__link" onClick={handleShowLinks}>Accueil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/salon" className="navbar__link" onClick={handleShowLinks}>Le Salon</Link>
        </li>
        <li className="navbar-item">
          <Link to="/prendre-rendez-vous" className="navbar__link" onClick={handleShowLinks}>Prendre rendez-vous</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar__link" onClick={handleShowLinks}>Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/catalogue" className="navbar__link" onClick={handleShowLinks}>Catalogue</Link>
        </li>
        <li className="navbar-item">
          <Link to="/galerie" className="navbar__link" onClick={handleShowLinks}>Galerie</Link>
        </li>
        <li className="navbar-item">
          <Link to="/avis" className="navbar__link" onClick={handleShowLinks}>Avis client</Link>
        </li>
        <li className="navbar-item">
          {logged ? <Link to="/profil" className="navbar__link" onClick={handleShowLinks}>Mon profil</Link> : <Link to="/s-enregistrer" className="navbar__link" onClick={handleShowLinks}>S'inscrire</Link> }
        </li>
        <li className="navbar-item">
          <Link to="/mentions-legales" className="navbar__link" onClick={handleShowLinks}>Mentions légales</Link>
        </li>
      </ul>
      <button type="button" className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Menu;
