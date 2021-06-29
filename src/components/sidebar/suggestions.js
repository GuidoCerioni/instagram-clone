import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedUser from './suggested-user';

export default function Suggestions({
  userId,
  following,
  loggedUserId,
  loggedUserDocId,
}) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    // get suggested profiles
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);

  if (!profiles) {
    return <Skeleton count={1} height={150} />;
  } else if (profiles.length > 0) {
    return (
      <div className="rounded flex flex-col">
        <p className="py-4 text-sm font-semibold text-gray-base">
          Suggestions For You
        </p>

        {profiles.map((profile, key) => (
          <SuggestedUser
            key={key}
            username={profile.username}
            fullName={profile.fullName}
            suggestedUserId={profile.userId}
            suggestedUserDocId={profile.docId}
            loggedUserId={loggedUserId}
            loggedUserDocId={loggedUserDocId}
          />
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
  loggedUserDocId: PropTypes.string,
  loggedUserId: PropTypes.string,
};
