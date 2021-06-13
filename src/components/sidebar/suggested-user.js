import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const SuggestedUser = ({ username, fullName }) => {
  const splittedFullName = fullName.split(/(\s+)/);
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <div className="flex justify-between">
      <Link to={`/p/${username}`} className="flex justify-between p-2">
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
            {splittedFullName[2] /* last name (if exist) */ ? (
              <span>{` ${splittedFullName[2]}`}</span>
            ) : null}
          </p>
          <p className="text-xs ">{`@${username}`}</p>
        </div>
      </Link>
      <button
        type="button"
        className="text-m text-blue-medium  hover:text-blue-mediumHover"
        onClick={(e) => {
          // e.preventDefault();
          console.log('following');
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default SuggestedUser;

SuggestedUser.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
