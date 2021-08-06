import PropTypes from 'prop-types';
import { useState, useEffect, useReducer } from 'react';
import { getPhotosByUserId } from '../../services/firebase';
import Header from './header';
import UserPhotos from './user-photos';

export default function UserProfile({ user }) {
  const reducer = (state, action) => ({ ...state, ...action });
  const initialState = {
    profile: user,
    photos: [],
    followerCount: 0,
  };

  const [{ profile, photos, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
