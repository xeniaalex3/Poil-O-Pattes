import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './style.scss';

function Time({
  value,
  type,
  name,
  onChange,
}) {
  const times = useSelector((state) => state.times.list.filter((time) => time.available === '1'));
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    console.log('click hour');
  };
  const inputId = name;
  return (
    <div className="select">
      <select
        name={name}
        className="select-time"
        id={inputId}
        type={type}
        onChange={handleChange}
        value={value}
      >
        <option defaultValue="">Horaires</option>
        {times.map((time) => (
          <option key={time.readableTime} value={time.inDBtime}> {time.readableTime}</option>
        ))}

      </select>

    </div>
  );
}

Time.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Time.defaultProps = {
  value: '',
  type: '',
};

export default Time;
