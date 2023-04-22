import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

function Grooming() {
  const groomings = useSelector((state) => state.services.list.filter((grooming) => grooming.type_service === 'toilettage'));
  return (
    <>
      <div className="grooming-header">
        <h1 className="grooming-title">Toilettage</h1>
        <Link className="grooming-link-spa" to="/services/spa">Spa</Link>
      </div>
      <div className="grooming">
        <table className="grooming-table">
          <thead>
            <tr>
              <th>Petit</th>
              <th>- de 15kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-grooming">Prix</span></td>
            </tr>
            {groomings.map((grooming) => (
              <tr key={grooming.service_id}>
                <td>{grooming.nom_service}</td>
                <td><span className="price-grooming">{grooming.prix_petit} &euro;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="grooming-table">
          <thead>
            <tr>
              <th>Moyenne taille</th>
              <th>De 15 à 30kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-grooming">Prix</span></td>
            </tr>
            {groomings.map((grooming) => (
              <tr key={grooming.service_id}>
                <td>{grooming.nom_service}</td>
                <td><span className="price-grooming">{grooming.prix_moyen} &euro;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="grooming-table">
          <thead>
            <tr>
              <th>Grande taille</th>
              <th>+ de 30kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td><span className="price-grooming">Prix</span></td>
            </tr>
            {groomings.map((grooming) => (
              <tr key={grooming.service_id}>
                <td>{grooming.nom_service}</td>
                <td><span className="price-grooming">{grooming.prix_grand} &euro;</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Grooming;
