import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function Bones() {
  const delicacies = useSelector((state) => state.delicacies.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.food[0] === 163));
  return (
    <>
      <h1 className="bones-title">Os</h1>
      <Link to="/catalogue/gourmandises" className="bones-back"><FaArrowCircleLeft />Retour</Link>
      <div className="bones-header">
        {delicacies.map((delicacie) => (
          <Link className=" bones-link" key={delicacie.title} to={delicacie.link}>{delicacie.title}</Link>
        ))}
      </div>
      <div className="bones">
        {products.map((product) => (
          <article key={product.slug} className="bones-article">
            <div className="bones-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default Bones;
