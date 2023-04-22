import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './style.scss';

function DogSelect({
  value,
  type,
  name,
  onChange,
}) {
  const dogs = useSelector((state) => state.dogsList.list);
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    console.log('click dog');
  };
  const inputId = name;
  return (
    <div className="select">
      <select
        name={name}
        className="select-dog"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      >
        <option defaultValue="">Votre animal</option>
        {dogs.map((dog) => (
          <option key={dog.slug} value={dog.id}> {dog.title.rendered}</option>
        ))}

      </select>

    </div>
  );
}

DogSelect.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

DogSelect.defaultProps = {
  value: '',
  type: '',
};

export default DogSelect;
