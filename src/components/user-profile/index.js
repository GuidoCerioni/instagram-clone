import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getPhotosByUserId } from '../../services/firebase';
import Header from './header';
import UserPhotos from './user-photos';

export default function UserProfile({ user }) {
  const [photos, setPhotos] = useState(false);
  useEffect(() => {
    async function getUserPhotos() {
      const response = await getPhotosByUserId(user.userId);
      setPhotos(response);
    }
    getUserPhotos();
  }, [user]);
  console.log(`photos`, photos);
  return (
    <>
      <Header user={user} />

      {photos ? (
        <UserPhotos photos={photos} />
      ) : (
        <div>
          <p>Add photos!</p>
        </div>
      )}
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};
