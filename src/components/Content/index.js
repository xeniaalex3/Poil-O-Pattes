import './style.scss';
import Categories from './Categories';
import Slides from './Slides';

function Content() {
  return (
    <div className="content">
      <Slides />
      <Categories />
    </div>

  );
}

export default Content;
