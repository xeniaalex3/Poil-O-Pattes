import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Baskets() {
  const accessories = useSelector((state) => state.accessories.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.accessory[0] === 161));
  return (
    <>
      <h1 className="baskets-title">Paniers</h1>
      <Link to="/catalogue/accessoires" className="baskets-back"><FaArrowCircleLeft />Retour</Link>
      <div className="baskets-header">
        {accessories.map((accessorie) => (
          <Link className=" baskets-link" key={accessorie.title} to={accessorie.link}>{accessorie.title}</Link>
        ))}
      </div>
      <div className="baskets">
        {products.map((product) => (
          <article key={product.slug} className="baskets-article">
            <div className="baskets-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Baskets;
