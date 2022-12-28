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
      <div>
        <Logo />
        <AuthForm />
      </div>
    );
  }
  return (
    <div>
      <Logo />
      <Profile/>
      <Logout/>
    </div>
  );
};

export default Header;
