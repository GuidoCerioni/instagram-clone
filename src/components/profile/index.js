import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function UserProfile({ user }) {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    async function getUserPhotos() {
      const photos = getPhotosByUserId(user.userId);
    }
    getUserPhotos();
  }, [user]);
  console.log(`user2`, user);
  return (
    <div className="flex">
      <img
        className="rounded-full h-8 w-8 flex"
        src={`/images/avatars/${user.username}.jpg`}
        alt={`${user.username} profile`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/users/userNotFound.png';
        }}
      />
      <div>
        <p>{user.username}</p>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};
