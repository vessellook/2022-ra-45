import React, { useContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { authEndpoint } from '../api';
import AuthContext from '../AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';

const propTypes = {
  onLogin: PropTypes.func,
};

const AuthFormView = ({loading, error, onLogin}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    onLogin?.({login: login, password});
    setLogin('');
    setPassword('');
  };

  const handleChangeUsername = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        className="auth-form__field"
        placeholder="Username"
        value={login}
        onChange={handleChangeUsername}
      />
      <input
        className="auth-form__field"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <div className="auth-form__error">{error}</div>
      <button className="auth-form__button" disabled={loading}>
        Login
      </button>
    </form>
  );
};

const AuthForm = () => {
  const { setToken } = useContext(AuthContext);
  const [body, setBody] = useState(null);
  const opts = useMemo(() => {
    if (body != null) {
      return { body: JSON.stringify(body), method: 'POST' };
    }
  }, [body]);
  const [data, loading, error] = useJsonFetch(authEndpoint, opts, {
    skip: body == null,
  });

  useEffect(() => {
    if (!loading && !error && data) {
      setToken(data);
    }
  }, [setToken, data, loading, error]);

  const handleLogin = (data) => setBody(data);

  return (
    <AuthFormView
      loading={loading}
      error={error && error.message}
      onLogin={handleLogin}
    />
  );
};

AuthForm.propTypes = propTypes;

export default AuthForm;
