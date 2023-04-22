import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';

function Services() {
  const servicesMedias = useSelector((state) => state.servicesMedia.list);

  return (
    <>
      <h1 className="services-title">Services</h1>
      <div className="services">
        {servicesMedias.map((servicesMedia) => (
          <article key={servicesMedia.title} className="services-article">
            <div className="services-content">
              <Link to={servicesMedia.link}>{servicesMedia.title}</Link>
              <Link to={servicesMedia.link}>
                <img src={servicesMedia.imageURL} alt={servicesMedia.title} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Services;
