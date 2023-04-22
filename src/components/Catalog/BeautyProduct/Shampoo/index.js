import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Shampoo() {
  const beautyProducts = useSelector((state) => state.beautyProducts.list);
  const products = useSelector((state) => state.products.list.filter((product) => product['beauty-products'][0] === 116));
  return (
    <>
      <h1 className="shampoo-title">Shampoings</h1>
      <Link to="/catalogue/produits-de-beaute" className="shampoo-back"><FaArrowCircleLeft />Retour</Link>
      <div className="shampoo-header">
        {beautyProducts.map((beautyProduct) => (
          <Link className=" shampoo-link" key={beautyProduct.title} to={beautyProduct.link}>{beautyProduct.title}</Link>
        ))}
      </div>
      <div className="shampoo">
        {products.map((product) => (
          <article key={product.slug} className="shampoo-article">
            <div className="shampoo-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Shampoo;
