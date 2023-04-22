import './style.scss';
import { useSelector } from 'react-redux';

function Gallery() {
  const galleries = useSelector((state) => state.galleryMedia.list);

  return (

    <div className="gallery">
      <h1 className="gallery-title">Galerie</h1>
      <div className="gallery-content">
        {galleries.map((gallery) => (
          <article key={gallery.imageURL} className="gallery-article">
            <img className="gallery-picture" src={gallery.imageURL} alt={gallery.category} />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
