import React from 'react';
import Logo from './Logo';
import AuthForm from './AuthForm';
import Profile from './Profile';
import Logout from './Logout';
import AuthGuard from './AuthGuard';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <AuthGuard guestChildren={<AuthForm />}>
        <div className="header__right">
          <Profile />
          <Logout />
        </div>
      </AuthGuard>
    </div>
  );
};

export default Header;
