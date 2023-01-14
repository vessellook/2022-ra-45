import React from 'react';
import AuthGuard from './AuthGuard';
import Hero from './Hero';
import News from './News';

const Body = () => {
  return (
    <div className="body">
      <AuthGuard guestChildren={<Hero motto="Facebook and VK killer." />}>
        <News />
      </AuthGuard>
    </div>
  );
};

export default Body;
