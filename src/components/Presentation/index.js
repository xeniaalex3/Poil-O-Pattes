import { Link } from 'react-router-dom';
import melodie from 'src/assets/images/melodie.png';
import xenia from 'src/assets/images/xenia.png';
import laura from 'src/assets/images/laura.png';
import raffi from 'src/assets/images/raffi.png';
import hocine from 'src/assets/images/hocine.png';
import './style.scss';

function Presentation() {
  return (
    <div className="presentation">
      <h2>Le salon</h2>
      <p className="presentation-introduction">
        Bienvenue au salon Poil O'Pattes où vos amis à quatre pattes pourront se faire
        chouchouter parmi nos divers services entre les mains expertes de notre équipe.
        Un soin, une coupe ? Nous sommes là pour répondre à vos attentes !
        Une question ? ou deux ? N'hésitez pas à nous contacter !
      </p>
      <h2>L'équipe</h2>
      <div className="presentation-box">
        <article className="presentation-article">
          <div className="presentation-name">
            <Link to="/presentation/mélodie">Mélodie</Link>
            <img src={melodie} alt="melodie.png" />
            <p className="presentation-title">Product Owner et Toiletteuse</p>
          </div>
        </article>
        <article className="presentation-article">
          <div>
            <Link to="/presentation/xenia">Xenia</Link>
            <img src={xenia} alt="xenia.png" />
            <p className="presentation-title">Git Master et Masseuse canine</p>
          </div>
        </article>
        <article className="presentation-article">
          <div>
            <Link to="/presentation/laura">Laura</Link>
            <img src={laura} alt="laura.png" />
            <p className="presentation-title">Lead Dev Front et Masseuse canine</p>
          </div>
        </article>
        <article className="presentation-article">
          <div>
            <Link to="/presentation/raffi">Raffi</Link>
            <img src={raffi} alt="raffi.png" />
            <p className="presentation-title">Scrum Master et Toiletteur</p>
          </div>
        </article>
        <article className="presentation-article">
          <div>
            <Link to="/presentation/hocine">Hocine</Link>
            <img src={hocine} alt="hocine.png" />
            <p className="presentation-title">Lead Dev Back et Toiletteur</p>
          </div>
        </article>
      </div>

    </div>

  );
}

export default Presentation;
