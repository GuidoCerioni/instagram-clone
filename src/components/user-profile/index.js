import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import { getPhotosByUserId } from '../../services/firebase';
import Header from './header';
import UserPhotos from './user-photos';

export default function UserProfile({ user }) {
  const reducer = (state, action) => ({ ...state, ...action });
  const initialState = {
    photos: [],
    photosCount: 0,
    followerCount: 0,
  };

  const [{ photos, photosCount, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function updateState() {
      const userPhotos = await getPhotosByUserId(user.userId);

      dispatch({
        photos: userPhotos,
        photosCount: userPhotos.length,
        followerCount: user.followers.length,
      });
    }
    updateState();
  }, [user]);
  return (
    <div className="container px-2 mx-auto max-w-screen-lg mb-10 phone:px-5">
      <Header
        profile={user}
        photosCount={photosCount}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <UserPhotos photos={photos} />
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    docId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
  }).isRequired,
};
