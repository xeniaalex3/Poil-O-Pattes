import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function EarsAndEyes() {
  const beautyProducts = useSelector((state) => state.beautyProducts.list);
  const products = useSelector((state) => state.products.list.filter((product) => product['beauty-products'][0] === 166));
  return (
    <>
      <h1 className="earsAndEyes-title">Soins des oreilles & yeux</h1>
      <Link to="/catalogue/produits-de-beaute" className="earsAndEyes-back"><FaArrowCircleLeft />Retour</Link>
      <div className="earsAndEyes-header">
        {beautyProducts.map((beautyProduct) => (
          <Link className=" earsAndEyes-link" key={beautyProduct.title} to={beautyProduct.link}>{beautyProduct.title}</Link>
        ))}
      </div>
      <div className="earsAndEyes">
        {products.map((product) => (
          <article key={product.slug} className="earsAndEyes-article">
            <div className="earsAndEyes-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default EarsAndEyes;
