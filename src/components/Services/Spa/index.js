import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

function Spa() {
  const spas = useSelector((state) => state.services.list.filter((spa) => spa.type_service === 'spa'));

  return (

    <>
      <div className="spa-header">
        <Link className="spa-link-grooming" to="/services/toilettage">Toilettage</Link>
        <h1 className="spa-title">Spa</h1>
      </div>
      <div className="spa">
        <table className="spa-table">
          <thead>
            <tr>
              <th>Petit</th>
              <th>- de 15kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-spa">Prix</span></td>
            </tr>
            {spas.map((spa) => (
              <tr key={spa.service_id}>
                <td>{spa.nom_service}</td>
                <td><span className="price-spa">{spa.prix_petit} &euro;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="spa-table">
          <thead>
            <tr>
              <th>Moyenne taille</th>
              <th>De 15 à 30kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-spa">Prix</span></td>
            </tr>
            {spas.map((spa) => (
              <tr key={spa.service_id}>
                <td>{spa.nom_service}</td>
                <td><span className="price-spa">{spa.prix_moyen} &euro;</span></td>
              </tr>
            ))}

          </tbody>
        </table>
        <table className="spa-table">
          <thead>
            <tr>
              <th>Grande taille</th>
              <th>+ de 30kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-spa">Prix</span></td>
            </tr>
            {spas.map((spa) => (
              <tr key={spa.service_id}>
                <td>{spa.nom_service}</td>
                <td><span className="price-spa">{spa.prix_grand} &euro;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Spa;
