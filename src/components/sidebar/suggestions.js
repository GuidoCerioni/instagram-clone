import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import User from './user';
export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);
  console.log(`userId`, userId);
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
      console.log(`response`, response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  return !profiles ? (
    <Skeleton count={1} height={150} />
  ) : (
    <div>
      {profiles.map((profile) => (
        <>
          <User
            username={profile.username}
            fullName={profile.fullName}
            key={profile.email}
          />
        </>
      ))}
    </div>
  );
}
Suggestions.propTypes = { userId: PropTypes.string };
