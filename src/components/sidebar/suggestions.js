import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import User from './user';
<<<<<<< HEAD
export default function Suggestions({ userId, following }) {
=======
export default function Suggestions({ userId }) {
>>>>>>> 6401a493f19991eb155e5b81da533d905ed0551c
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6401a493f19991eb155e5b81da533d905ed0551c
}
Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
