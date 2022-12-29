import React, { useContext } from 'react';
import ProfileContext from '../ProfileContext';

const ProfileView = ({ name, avatar }) => {
  return (
    <div className="profile">
      <span className="profile__welcome">Hello, {name}</span>
      <img className="profile__image" src={avatar} alt="" />
    </div>
  );
};

const Profile = () => {
  const user = useContext(ProfileContext);
  if (user == null) {
    return;
  }
  const {name, avatar} = user;
  return <ProfileView name={name} avatar={avatar} />;
}

export default Profile;
