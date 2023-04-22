import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Treats() {
  const delicacies = useSelector((state) => state.delicacies.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.food[0] === 164));
  return (
    <>
      <h1 className="treats-title">Friandises</h1>
      <Link to="/catalogue/gourmandises" className="treats-back"><FaArrowCircleLeft />Retour</Link>
      <div className="treats-header">
        {delicacies.map((delicacie) => (
          <Link className=" treats-link" key={delicacie.title} to={delicacie.link}>{delicacie.title}</Link>
        ))}
      </div>
      <div className="treats">
        {products.map((product) => (
          <article key={product.slug} className="treats-article">
            <div className="treats-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Treats;
