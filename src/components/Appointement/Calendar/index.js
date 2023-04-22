import PropTypes from 'prop-types';
import './style.scss';

function Calendar({
  value,
  type,
  name,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    console.log('click date');
  };

  const inputId = name;
  return (
    <div className="input">
      <input
        name={name}
        className="input-date"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      />

    </div>
  );
}

Calendar.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  value: '',
  type: '',
};

export default Calendar;
