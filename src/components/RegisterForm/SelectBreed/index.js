import './style.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SelectBreed({
  value,
  type,
  name,
  onChange,
}) {
  const breeds = useSelector((state) => state.breeds.list);

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = name;

  return (
    <div className="select">
      <select
        name={name}
        className="select-breed"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      >
        <option defaultValue="">Race</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>{breed.name}</option>
        ))}

      </select>
    </div>

  );
}
SelectBreed.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectBreed.defaultProps = {
  value: '',
  type: '',
};
export default SelectBreed;
