import React from 'react';

const LogoutView = ({ onClick }) => {
  return (
    <button className="logout" onClick={onClick}>
      Logout
    </button>
  );
};

const Logout = () => {
  const { setToken } = useContext(AuthContext);
  const handleClick = () => {
    setToken(null);
  };
  return <LogoutView onClick={handleClick} />;
};

export default Logout;
