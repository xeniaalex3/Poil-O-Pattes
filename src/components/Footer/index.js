import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdLocationPin, MdEmail, MdAccessTimeFilled } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './style.scss';
import Map from './Map';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-box--contact">
          <p><MdLocationPin /> Adresse: Paris 75000</p>
          <p><BsFillTelephoneFill /> Téléphone: 0100000000</p>
          <p><MdEmail /> Email: Poil_O_Pattes@gmail.com</p>
          <p><MdAccessTimeFilled /> Horaires</p>
          <p className="time"><span className="days">Mardi-Jeudi</span> : 09h30-12h30 / 14h00-19h00</p>
          <p className="time"><span className="days">Vendredi</span> : 09h30-17h00</p>
          <p className="time"><span className="days">Samedi</span> : 09h30-18h00</p>
        </div>
        <div className="footer-box--map">
          <Map />
        </div>
      </div>
      <div className="footer-social">
        <p>Suivez-nous</p>
        <nav>
          <ul>
            <li>
              <a href="#"><FaFacebook /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>2022 Poil' O Pattes Tout droit réservé</p>
      </div>
    </footer>
  );
}

export default Footer;
