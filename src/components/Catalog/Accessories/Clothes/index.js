import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Clothes() {
  const accessories = useSelector((state) => state.accessories.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.accessory[0] === 160));
  return (
    <>
      <h1 className="clothes-title">Vêtements</h1>
      <Link to="/catalogue/accessoires" className="clothes-back"><FaArrowCircleLeft />Retour</Link>
      <div className="clothes-header">
        {accessories.map((accessorie) => (
          <Link className=" clothes-link" key={accessorie.title} to={accessorie.link}>{accessorie.title}</Link>
        ))}
      </div>
      <div className="clothes">
        {products.map((product) => (
          <article key={product.slug} className="clothes-article">
            <div className="clothes-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Clothes;
