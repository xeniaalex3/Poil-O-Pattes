import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { changeLoginField, login } from 'src/actions/user';

import Field from './Field';
import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.user);
  const { email, password } = useSelector((state) => state.user.loginForm);

  const handleChangeLoginField = (value, key) => {
    dispatch(changeLoginField(value, key));
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">

      {logged && (
        <Navigate to="/" replace />
      )}

      {!logged && (

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="Adresse Email"
          onChange={handleChangeLoginField}
          value={email}
        />
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChangeLoginField}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          OK
        </button>
      </form>
      )}
    </div>
  );
}

export default LoginForm;
