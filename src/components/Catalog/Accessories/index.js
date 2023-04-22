import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

function Accessories() {
  const accessories = useSelector((state) => state.accessories.list);
  const catalogs = useSelector((state) => state.catalogMedia.list);

  return (
    <>
      <h1 className="accessories-title">Accessoires</h1>
      <div className="accessories-header">
        {catalogs.map((catalog) => (
          <Link
            className="accessories-link"
            key={catalog.title}
            to={catalog.link}
          >
            {catalog.title}
          </Link>
        ))}
      </div>
      <div className="accessories">
        {accessories.map((accessorie) => (
          <article key={accessorie.title} className="accessories-article">
            <div className="accessories-content">
              <Link to={accessorie.link}>{accessorie.title}</Link>
              <Link
                to={accessorie.link}
              >
                <img
                  src={accessorie.imageURL}
                  alt={accessorie.title}
                />
              </Link>
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Accessories;
