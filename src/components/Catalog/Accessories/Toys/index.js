import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Toys() {
  const accessories = useSelector((state) => state.accessories.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.accessory[0] === 21));
  return (
    <>
      <h1 className="toys-title">Jouets</h1>
      <Link to="/catalogue/accessoires" className="toys-back"><FaArrowCircleLeft />Retour</Link>
      <div className="toys-header">
        {accessories.map((accessorie) => (
          <Link className=" toys-link" key={accessorie.title} to={accessorie.link}>{accessorie.title}</Link>
        ))}
      </div>
      <div className="toys">
        {products.map((product) => (
          <article key={product.slug} className="toys-article">
            <div className="toys-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Toys;
