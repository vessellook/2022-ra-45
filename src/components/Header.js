import React, { useContext } from 'react';
import AuthContext from '../AuthContext';
import Logo from './Logo';
import AuthForm from './AuthForm';
import Profile from './Profile';
import Logout from './Logout';

const Header = () => {
  const { guest } = useContext(AuthContext);
  if (guest) {
    return (
      <div className="header">
        <Logo />
        <AuthForm />
      </div>
    );
  }
  return (
    <div className="header">
      <Logo />
      <div className='header__right'>
        <Profile />
        <Logout />
      </div>
    </div>
  );
};

export default Header;
