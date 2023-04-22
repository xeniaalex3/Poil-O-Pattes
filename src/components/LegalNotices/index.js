import './style.scss';

function LegalNotices() {
  return (
    <div className="legalnotices">
      <h1>Mentions Légales</h1>
      <div className="legalnotices-container">
        <div className="legalnotices-box">
          <h2 className="legalnotices-title">Confidentialité</h2>
          <div className="legalnotices-notices">
            <p>
              SARL Poil O'Pattes n'enregistre pas d'informations personnelles
              permettant l'identification, à l'exception des formulaires que
              l'utilisateur est libre de remplir. Ces informations ne seront pas
              utilisées sans votre accord, nous les utiliserons seulement pour
              vous adresser des courriers, des brochures, des devis ou vous
              contacter.
            </p>
            <p>
              Les informations recueillies sur les sites bénéficient de la
              protection de la loi "Informatique et Libertés" n° 78-17 du 06
              janvier 1978. Elles bénéficient d'un droit d'accès, de
              rectification, d'opposition à communication et de suppression sur
              simple demande à SARL Poil O'Pattes, (adresse).
            </p>
            <p>
              SARL Poil O'Pattes pourra procéder à des analyses statistiques
              sans que celles-ci soient nominatives et pourra en informer des
              tiers (organismes d'évaluation de fréquentation) sous une forme
              résumée et non nominative.
            </p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-title">RGPD</h2>
          <div className="legalnotices-notices">
            <p>
              SARL Poil O' Pattes s'engage à ce que la collecte et le traitement
              de vos données, effectués à partir du site poilopattes.fr, soient
              conformes au règlement général sur la protection des données (RGPD).
              Chaque formulaire ou téléservice limite la collecte des données
              personnelles au strict nécessaire (minimisation des données) et
              indique notamment :
            </p>
            <ul>
              <li>quels sont les objectifs du recueil de ces données,</li>
              <li>
                si ces données sont obligatoires ou facultatives pour la gestion
                de votre demande,
              </li>
              <li>
                ui pourra en prendre connaissance (uniquement SARL DOGGY COIFF en
                principe, sauf précision dans le formulaire lorsqu'une
                transmission à un tiers est nécessaire à la gestion de votre
                demande),
              </li>
            </ul>
            <p>
              Les données personnelles recueillies dans le cadre des services
              proposés sur poilopattes.fr sont traitées selon des protocoles
              sécurisés et permettent à SARL Poil O'Pattes de gérer les demandes
              reçues dans ses applications informatiques.
            </p>
            <p>
              Pour toute information ou exercice de vos droits Informatique et
              Libertés sur les traitements de données personnelles gérés par SARL
              Poil O'Pattes, vous pouvez contacter SARL Poil O'Pattes et
              éventuellement son délégué à la protection des données (DPO), si
              distingué.
            </p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-title">Utilisation de cookies</h2>
          <div className="legalnotices-notices">
            <p>
              Les cookies permettent d’enregistrer les informations (non
              personnelles) relatives à la navigation des utilisateurs sur
              internet. Les cookies déposés par (blablabla) ont pour objectif
              l’amélioration de l’expérience de navigation des visiteurs ainsi que
              l’optimisation des statistiques. Ceux-ci ne seront utilisés que dans
              le cadre de votre navigation sur le site poilopattes.fr
            </p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-title">Liens hypertexte</h2>
          <div className="legalnotices-notices">
            <p>
              SARL Poil O'Pattes ne contrôle pas les sites en connexion avec le
              sien, et ne saurait donc être responsable de leur contenu. Les
              risques liés à l'utilisation de ces sites incombent pleinement à
              l'utilisateur. Il se conformera à leurs conditions d'utilisation.
            </p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-role">Editeur</h2>
          <div className="legalnotices-notices">
            <p>SARL Poil O'Pattes</p>
            <p>RCS (ville):(numéro)</p>
            <p>Siège social:(adresse)</p>
            <p>N° de téléphone:0123456789</p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-role">Directeur de la publication</h2>
          <div className="legalnotices-notices">
            <p>nom du directeur</p>
          </div>
        </div>
        <div className="legalnotices-box">
          <h2 className="legalnotices-role">Hébergement</h2>
          <div className="legalnotices-notices">
            <p>blablabla.com</p>
            <p>SA au capital de (chiffre) euros</p>
            <p>RCS (ville)(numéro)</p>
            <p>Siège social:(adresse complète)</p>
            <p>N° de téléphone:0987654321</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalNotices;
