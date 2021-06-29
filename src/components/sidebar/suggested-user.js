import PropTypes from 'prop-types';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { updateFollowing } from '../../services/firebase';
import { updateFollowers } from '../../services/firebase';

export default function SuggestedUser({
  username,
  fullName,
  suggestedUserId,
  suggestedUserDocId,
  loggedUserId,
  loggedUserDocId,
}) {
  const splittedFullName = fullName.split(/(\s+)/);

  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    // TODO: revisar eficiencia de los llamados promise.all
    setFollowed(true);

    async function promiseFollowing() {
      await updateFollowing(loggedUserDocId, suggestedUserId, false);
    }
    async function promiseFollowers() {
      await updateFollowers(loggedUserId, suggestedUserDocId, false);
    }
    Promise.all([promiseFollowing(), promiseFollowers()]);
  }
  async function handleUnfollowUser() {
    setFollowed(false);
    await updateFollowing(loggedUserDocId, suggestedUserId, true);
    await updateFollowers(loggedUserId, suggestedUserDocId, true);
  }
  function handleFollowButton() {
    followed ? handleUnfollowUser() : handleFollowUser();
  }

  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <div className="flex justify-between items-center">
      <Link
        to={`/p/${username}`}
        className="flex items-center justify-between py-2 pr-2"
      >
        <div className="mr-3">
          <img
            src={`/images/avatars/${username}.jpg`}
            className="rounded-full w-8 h-8"
            alt={`${fullName} profile picture`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/users/userNotFound.png';
            }}
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="text-sm font-bold">
            {`${splittedFullName[0]}` /* first name */}
            {
              /* last name (if exist) */
              splittedFullName[2] ? (
                <span>{` ${splittedFullName[2]}`}</span>
              ) : null
            }
          </p>
          <p className="text-xs ">{`@${username}`}</p>
        </div>
      </Link>
      <button
        type="button"
        className="text-sm font-semibold
        text-blue-medium  hover:text-blue-mediumHover"
        onClick={handleFollowButton}
      >
        {followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

SuggestedUser.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  suggestedUserId: PropTypes.string.isRequired,
  suggestedUserDocId: PropTypes.string.isRequired,
  loggedUserId: PropTypes.string.isRequired,
  loggedUserDocId: PropTypes.string.isRequired,
};
