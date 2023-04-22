import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Others() {
  const accessories = useSelector((state) => state.accessories.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.accessory[0] === 162));
  return (
    <>
      <h1 className="others-title">Autres</h1>
      <Link to="/catalogue/accessoires" className="others-back"><FaArrowCircleLeft />Retour</Link>
      <div className="others-header">
        {accessories.map((accessorie) => (
          <Link className=" others-link" key={accessorie.title} to={accessorie.link}>{accessorie.title}</Link>
        ))}
      </div>
      <div className="others">
        {products.map((product) => (
          <article key={product.slug} className="others-article">
            <div className="others-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Others;
