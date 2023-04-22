import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.scss';

function ChewSticks() {
  const delicacies = useSelector((state) => state.delicacies.list);
  const products = useSelector((state) => state.products.list.filter((product) => product.food[0] === 165));
  return (
    <>
      <h1 className="chewSticks-title">Bâtons à mâcher</h1>
      <Link to="/catalogue/gourmandises" className="chewSticks-back"><FaArrowCircleLeft />Retour</Link>
      <div className="chewSticks-header">
        {delicacies.map((delicacie) => (
          <Link className=" chewSticks-link" key={delicacie.title} to={delicacie.link}>{delicacie.title}</Link>
        ))}
      </div>
      <div className="chewSticks">
        {products.map((product) => (
          <article key={product.slug} className="chewSticks-article">
            <div className="chewSticks-content">
              <h2>{product.title.rendered}</h2>
              <img src={product._embedded['wp:featuredmedia'][0].source_url} alt={product.title.rendered} />
            </div>
          </article>
        ))}

      </div>
    </>
  );
}

export default ChewSticks;
