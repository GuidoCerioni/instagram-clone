import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <div className="flex mb-6 items-center">
      <Link to={`/p/${username}`}>
        <img
          src={`/images/avatars/${username}.jpg`}
          className="rounded-full w-14 h-14"
          alt={`${fullName} profile picture`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/users/userNotFound.png';
          }}
        />
      </Link>
      <div className="ml-6 flex flex-col justify-evenly">
        <Link to={`/p/${username}`}>
          <p className="text-sm font-semibold">{username}</p>
          <p className="text-sm text-gray-base">{fullName}</p>
        </Link>
      </div>
    </div>
  );

export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
