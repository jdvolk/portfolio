import React from 'react';
import SocialLinks from './socialLinks';
import ProfilePhoto from './profilePhoto';
import ProfileDescription from './profilePhoto';

function ProfileCard(props) {
  return (
    <section className="profile-card">
      <ProfilePhoto />
      <ProfileDescription />
      <SocialLinks />
    </section>
  );
}

export default ProfileCard;