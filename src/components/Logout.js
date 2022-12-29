import React from 'react';
import { useContext } from 'react';
import AuthContext from '../AuthContext';

const LogoutView = ({ onClick }) => {
  return (
    <button className="logout" onClick={onClick}>
      Logout
    </button>
  );
};

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const handleClick = () => {
    logout();
  };
  return <LogoutView onClick={handleClick} />;
};

export default Logout;
