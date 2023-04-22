import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function PadsAndTruffle() {
  const beautyProducts = useSelector((state) => state.beautyProducts.list);
  const products = useSelector((state) => state.products.list.filter((product) => product['beauty-products'][0] === 167));
  return (
    <>
      <h1 className="padsAndTruffle-title">Soins des coussinets & truffes</h1>
      <Link to="/catalogue/produits-de-beaute" className="padsAndTruffle-back"><FaArrowCircleLeft />Retour</Link>
      <div className="padsAndTruffle-header">
        {beautyProducts.map((beautyProduct) => (
          <Link className=" padsAndTruffle-link" key={beautyProduct.title} to={beautyProduct.link}>{beautyProduct.title}</Link>
        ))}
      </div>
      <div className="padsAndTruffle">
        {products.map((product) => (
          <article key={product.slug} className="padsAndTruffle-article">
            <div className="padsAndTruffle-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default PadsAndTruffle;

