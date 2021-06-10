import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import User from './user';
export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    // get suggested profiles
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      console.log(`response`, response);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);

  if (!profiles) {
    return <Skeleton count={1} height={150} />;
  } else if (profiles.length > 1) {
    return (
      <div className="rounded flex flex-col">
        <div className="flex justify-center content-center my-3">
          <p className="text-sm font-bold text-gray-base">
            Suggestions for you
          </p>
        </div>
        {profiles.map((profile, key) => (
          <div key={key}>
            <User username={profile.username} fullName={profile.fullName} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
