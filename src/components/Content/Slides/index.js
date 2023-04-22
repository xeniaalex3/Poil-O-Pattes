import { Slide } from 'react-slideshow-image';
import Slider from 'react-slick';
import 'react-slideshow-image/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../assets/images/slide_2.jpg';
import img2 from '../../../assets/images/slide_3.jpg';
import img3 from '../../../assets/images/slide_4.jpg';
import img4 from '../../../assets/images/slide_5.jpg';
import img5 from '../../../assets/images/slide_6.jpg';

import './style.scss';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
};

function Slidershow() {
  return (
    <div>
      <div className="slide-container">
        <Slide {...proprietes} className="slide-one">
          <div className="each-slide">
            <div>
              <img src={img1} alt="img1" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img2} alt="img2" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img3} alt="img3" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img4} alt="img4" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={img5} alt="img5" />
            </div>
          </div>
        </Slide>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="slider-multi">
          <div style={{ width: 300 }}>
            <img src={img1} alt="img5" />
          </div>
          <div style={{ width: 300 }}>
            <img src={img2} alt="img5" />
          </div>
          <div style={{ width: 300 }}>
            <img src={img3} alt="img5" />
          </div>
          <div style={{ width: 300 }}>
            <img src={img4} alt="img5" />
          </div>
          <div style={{ width: 300 }}>
            <img src={img5} alt="img5" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slidershow;
