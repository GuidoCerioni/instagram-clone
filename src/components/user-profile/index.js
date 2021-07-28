import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getPhotosByUserId } from '../../services/firebase';
import Header from './header';
import UserPhotos from './user-photos';

export default function UserProfile({ profile }) {
  const [photos, setPhotos] = useState(false);

  useEffect(() => {
    async function getUserPhotos() {
      const response = await getPhotosByUserId(profile.userId);
      setPhotos(response);
    }
    getUserPhotos();
  }, [profile]);
  return (
    <div className="container px-2 mx-auto max-w-screen-lg mb-10 phone:px-5">
      <Header profile={profile} photos={photos} />
      <UserPhotos photos={photos} />
    </div>
  );
}

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};
