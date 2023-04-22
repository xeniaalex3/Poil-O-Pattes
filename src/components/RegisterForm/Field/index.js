import PropTypes from 'prop-types';

import './style.scss';

// == Composant
function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = name;
  return (
    <div>

      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={inputId}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Default values for props
Field.defaultProps = {
  value: '',
  type: '',
};

// == Export
export default Field;
