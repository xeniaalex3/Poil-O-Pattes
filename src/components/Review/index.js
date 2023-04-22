import './style.scss';
// import React from 'react';
import { Message } from 'semantic-ui-react';

function Review() {
  return (
    <div className="review">
      <h2>Avis</h2>
      <div className="review-nickname">
        <span>Pseudo: Eve</span>
      </div>
      <div className="review-day">
        <span>Date: 15-08-2022</span>
      </div>
      <div className="review-client">
        <Message className="review-title">"Recommande les yeux fermés !"</Message>
        <p className="review-avis">JE RECOMMANDE VIVEMENT CE SALON! Laura est passionnée,
          attentive et tellement professionnelle. Mon chien est toujours content d'y aller,
          c'est très bon signe. Ne cherchez plus, c'est là que vous devez aller!
        </p>
      </div>
      <div className="review-nickname">
        <span>Pseudo: Anna</span>
      </div>
      <div className="review-day">
        <span>Date: 01-09-2022</span>
      </div>
      <div className="review-client">
        <Message className="review-title">"Mon chien adore !"</Message>
        <p className="review-avis">Les étoiles méritent les 5/5, la patronne est agréable, avenante,
          aime les animaux. Mon chien n'a pas peur de se rendre chez elle, c'est un point
          cruciale. Quant à son travail c'est 20/20. Je suis heureuse d'avoir trouvé ce
          salon pour lui et pour moi car je suis rassurée quand je laisse mon chien.
          Bravo et merci à vous!
        </p>
      </div>
      <div className="review-nickname">
        <span>Pseudo: Olivia</span>
      </div>
      <div className="review-day">
        <span>Date: 06-09-2022</span>
      </div>
      <div className="review-client">
        <Message className="review-title">"Meilleur salon pour chien !"</Message>
        <p className="review-avis">Le meilleur toilettage de Paris, on me l'a recommander et je le recommande a mon tour.
          Dans sa boutique elle a également des accessoires geniaux et tout ce qu'il faut pour
          prendre soin de mes chiens. Merci l'équipe et continuez ainsi
        </p>
      </div>
    </div>

  );
}

export default Review;
