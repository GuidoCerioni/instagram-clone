import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function PostHeader({ username }) {
  return (
    <div
      className="flex justify-between items-center
      h-60 p-4 border-b border-gray-primary"
    >
      <div className="flex items-center">
        <img
          className="rounded-full w-9 h-9 mr-5"
          src={`/images/avatars/${username}.jpg`}
        />
        <Link className="text-sm font-semibold" to={`/p/${username}`}>
          {username}
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1
             1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2
              0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </div>
  );
}

PostHeader.propTypes = {
  username: PropTypes.string,
};
