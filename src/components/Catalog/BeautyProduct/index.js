import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

function BeautyProduct() {
  const beautyProducts = useSelector((state) => state.beautyProducts.list);
  const catalogs = useSelector((state) => state.catalogMedia.list);

  return (
    <>
      <h1 className="beautyproduct-title">Produits de beauté</h1>
      <div className="beautyproduct-header">
        {catalogs.map((catalog) => (
          <Link className="beautyproduct-link" key={catalog.title} to={catalog.link}>{catalog.title}</Link>
        ))}
      </div>
      <div className="beautyproduct">
        {beautyProducts.map((beautyProduct) => (
          <article key={beautyProduct.title} className="beautyproduct-article">
            <div className="beautyproduct-content">
              <Link to={beautyProduct.link}>{beautyProduct.title}</Link>
              <Link
                to={beautyProduct.link}
              >
                <img
                  src={beautyProduct.imageURL}
                  alt={beautyProduct.title}
                />
              </Link>
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default BeautyProduct;
