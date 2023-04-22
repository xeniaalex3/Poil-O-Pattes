import './style.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SelectYear({
  value,
  type,
  name,
  onChange,
}) {
  const years = useSelector((state) => state.years.list);
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = name;

  return (
    <div className="select">
      <select
        name={name}
        className="select-year"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      >
        <option defaultValue="">Année de naissance</option>
        {years.map((year) => (
          <option
            key={year.id}
            value={year.id}
          >
            {year.name}
          </option>
        ))}

      </select>
    </div>

  );
}

SelectYear.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectYear.defaultProps = {
  value: '',
  type: '',
};
export default SelectYear;
