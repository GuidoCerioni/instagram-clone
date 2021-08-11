/* eslint-disable max-len */
import PropTypes from 'prop-types';
import useUser from '../../hooks/use-user';
import { useState, useEffect, useReducer } from 'react';
import {
  isUserFollowingProfile,
  updateFollowing,
  updateFollowers,
} from '../../services/firebase';
import Loader from 'react-loader-spinner';

export default function Header({
  profile,
  photosCount,
  followerCount,
  setFollowerCount,
}) {
  const { user: loggedInUser } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  // isFollowingProfile : -1 if my own profile, 0 if not following, 1 if following

  const [loaderDisplay, setLoaderDisplay] = useState('hidden');

  useEffect(() => {
    async function updateState() {
      const isFollowing = await isUserFollowingProfile(
        loggedInUser.userId,
        profile.userId
      );
      setIsFollowingProfile(isFollowing);
    }
    if (loggedInUser.userId != undefined) {
      if (loggedInUser.userId === profile.userId) {
        setIsFollowingProfile(-1);
      } else {
        updateState();
      }
    }
  }, [loggedInUser, profile]);

  async function handleFollowUser() {
    try {
      setLoaderDisplay('inline-block');
      // TODO: make just one function call
      await updateFollowing(loggedInUser.docId, profile.userId, false);
      await updateFollowers(loggedInUser.userId, profile.docId, false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderDisplay('hidden');
    }
  }

  async function handleUnfollowUser() {
    try {
      setLoaderDisplay('inline-block');
      await updateFollowing(loggedInUser.docId, profile.userId, true);
      await updateFollowers(loggedInUser.userId, profile.docId, true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderDisplay('hidden');
    }
  }

  async function handleToggleFollow() {
    if (isFollowingProfile) {
      await handleUnfollowUser();
    } else {
      await handleFollowUser();
    }
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1,
    });
  }
  return (
    <>
      <div className="flex">
        <img
          className="rounded-full h-16 w-16 mb-4 flex ml-2 mr-6 phone:mr-10 sm:h-36 sm:w-36 sm:mx-14"
          src={`/images/avatars/${profile.username}.jpg`}
          alt={`${profile.username} profile`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/users/userNotFound.png';
          }}
        />
        <div className="flex flex-col">
          <div className="flex mb-4 flex-col phonexs:flex-row phonexs:items-center">
            <p className="text-lg font-light mr-4 phone:text-2xl phone:mr-6">
              {profile.username}
            </p>

            <div className="flex align-center mt-2 sm:mt-0">
              {isFollowingProfile == -1 ? (
                <svg
                  aria-label="Options"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"></path>
                </svg>
              ) : (
                <button
                  className="py-1 px-1 rounded-md text-xs font-semibold bg-blue-medium text-white
                phone:font-bold phone:text-sm phone:px-2"
                  type="button"
                  onClick={handleToggleFollow}
                >
                  {isFollowingProfile ? 'Unfollow' : 'Follow'}
                </button>
              )}
              <Loader
                className={`${loaderDisplay} ml-4`}
                type="TailSpin"
                color="#0082F6"
                height={24}
                width={24}
              />
            </div>
          </div>

          <div className="hidden mb-4 sm:flex">
            <p>
              <span className="font-semibold ">{photosCount}</span> posts
            </p>
            <p>
              <span className="font-semibold ml-10">{followerCount}</span>{' '}
              followers
            </p>
            <p>
              <span className="font-semibold ml-10">
                {profile.following.length}
              </span>{' '}
              following
            </p>
          </div>
          <p className="font-semibold inline-block text-xs sm:text-sm mb-4">
            {profile.fullName}
          </p>
        </div>
      </div>

      <hr
        style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 0.5,
          borderColor: '#dbdbdb',
        }}
        className="mb-4 sm:mb-8"
      />
    </>
  );
}
Header.propTypes = {
  profile: PropTypes.object.isRequired,
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
};
