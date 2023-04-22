import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

function Catalog() {
  const catalogs = useSelector((state) => state.catalogMedia.list);

  return (
    <>
      <h1 className="catalog-title">Catalogue</h1>
      <div className="catalog">
        {catalogs.map((catalog) => (
          <article key={catalog.title} className="catalog-article">
            <div className="catalog-content">
              <Link to={catalog.link}>{catalog.title}</Link>
              <Link
                to={catalog.link}
              >
                <img
                  src={catalog.imageURL}
                  alt={catalog.title}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Catalog;
