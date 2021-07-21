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
    <div className="container px-5 mx-auto max-w-screen-lg">
      <Header profile={profile} photos={photos} />

      {photos ? (
        <UserPhotos photos={photos} />
      ) : (
        <div className="flex justify-center">
          <p>User does not have any photos yet</p>
        </div>
      )}
    </div>
  );
}

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};
