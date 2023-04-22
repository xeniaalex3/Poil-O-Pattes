import './style.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SelectWeight({
  value,
  type,
  name,
  onChange,
}) {
  const weights = useSelector((state) => state.weights.list);
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = name;

  return (
    <div className="select">
      <select
        name={name}
        className="select-weight"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      >
        <option defaultValue="">Poids</option>
        {weights.map((weight) => (
          <option key={weight.id} value={weight.id}> {weight.name}  </option>
        ))}

      </select>
    </div>

  );
}
SelectWeight.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectWeight.defaultProps = {
  value: '',
  type: '',
};
export default SelectWeight;
