import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getPhotosByUserId } from '../../services/firebase';
import Header from './header';
import UserPhotos from './user-photos';

export default function UserProfile({ user }) {
  const [photos, setPhotos] = useState(false);

  const initialState = {
    isFollowing: false,
    followersCount: user.followers.length,
    loaderDisplay1: 'hidden',
  };
  function reducer(state, action) {}
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getUserPhotos() {
      const response = await getPhotosByUserId(user.userId);
      setPhotos(response);
    }
    getUserPhotos();
  }, [user]);
  return (
    <div className="container px-2 mx-auto max-w-screen-lg mb-10 phone:px-5">
      <Header profile={user} photos={photos} />
      <UserPhotos photos={photos} />
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};
