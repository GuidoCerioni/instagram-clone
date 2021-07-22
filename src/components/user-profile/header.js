/* eslint-disable max-len */
import PropTypes from 'prop-types';
import useUser from '../../hooks/use-user';
import { useState, useEffect } from 'react';
import { isUserFollowingProfile } from '../../services/firebase';
export default function Header({ profile, photos }) {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  useEffect(() => {
    async function isLoggedInUserFollowingProfile() {
      const response = await isUserFollowingProfile(
        user.userId,
        profile.userId
      );
      setIsFollowingProfile(response);
    }
    if (user.userId != undefined) {
      if (user.userId === profile.userId) {
        setIsFollowingProfile(-1);
      } else {
        isLoggedInUserFollowingProfile();
      }
    }
  }, [user, profile]);

  function renderButton(isFollowingProfile) {
    // isFollowingProfile : -1 if my own profile, 0 if not following, 1 if following
    switch (isFollowingProfile) {
      case -1:
        return (
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
        );
      case 0:
        return (
          <button className="py-2 px-3  rounded bg-blue-medium text-white">
            Follow
          </button>
        );
      case 1:
        return (
          <button className="py-1 px-2  rounded-md bg-blue-medium text-white">
            Unfollow
          </button>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex mb-8">
        <img
          className="rounded-full h-36 w-36 flex mx-14"
          src={`/images/avatars/${profile.username}.jpg`}
          alt={`${profile.username} profile`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/users/userNotFound.png';
          }}
        />
        <div className="flex flex-col">
          <div className=" flex items-center mb-4">
            <p className="text-2xl font-light mr-6">{profile.username}</p>
            {renderButton(isFollowingProfile)}
          </div>

          <div className="flex mb-4">
            <p>
              <span className="font-semibold ">
                {photos ? photos.length : '0'}
              </span>{' '}
              posts
            </p>
            <p>
              <span className="font-semibold ml-10">
                {profile.followers.length}
              </span>{' '}
              followers
            </p>
            <p>
              <span className="font-semibold ml-10">
                {profile.following.length}
              </span>{' '}
              following
            </p>
          </div>
          <p className="font-semibold">{profile.fullName}</p>
        </div>
      </div>
      <hr
        style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 0.5,
          borderColor: '#dbdbdb',
        }}
        className="mb-8"
      />
    </>
  );
}
Header.propTypes = {
  profile: PropTypes.object.isRequired,
  photos: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
};
/* {isFollowingProfile === 0 ? (
              <button className="py-2 px-3 border rounded bg-blue-medium text-white">
                Follow
              </button>
            ) : null}
            {isFollowingProfile === 1 ? (
              <button className="py-1 px-2 border rounded-md bg-blue-medium text-white">
                Unfollow
              </button>
            ) : null}
            {
              // TODO: onclick function
              isFollowingProfile === -1 ? (
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
              ) : null
            } */
