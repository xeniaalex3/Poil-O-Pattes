import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

function Delicacies() {
  const delicacies = useSelector((state) => state.delicacies.list);
  const catalogs = useSelector((state) => state.catalogMedia.list);

  return (
    <>
      <h1 className="delicacies-title">Gourmandises</h1>
      <div className="delicacies-header">
        {catalogs.map((catalog) => (
          <Link className="delicacies-link" key={catalog.title} to={catalog.link}>{catalog.title}</Link>
        ))}
      </div>
      <div className="delicacies">
        {delicacies.map((delicacie) => (
          <article key={delicacie.title} className="delicacies-article">
            <div className="delicacies-content">
              <Link to={delicacie.link}>{delicacie.title}</Link>
              <Link
                to={delicacie.link}
              >
                <img
                  src={delicacie.imageURL}
                  alt={delicacie.title}
                />
              </Link>
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Delicacies;
