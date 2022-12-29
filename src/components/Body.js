import React, { useContext } from 'react';
import AuthContext from '../AuthContext';
import Hero from './Hero';
import News from './News';

const Body = () => {
  const { guest } = useContext(AuthContext);
  if (guest) {
    return (
      <div className='body'>
        <Hero motto="Facebook and VK killer." />
      </div>
    );
  }
  return (
    <div className='body'>
      <News />
    </div>
  );
};

export default Body;
