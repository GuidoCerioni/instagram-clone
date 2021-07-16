import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import useUser from '../hooks/use-user';

import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useUser();

  return (
    <header
      className="sticky z-10 top-0 h-14
     bg-white border-b border-gray-primary mb-7"
    >
      <div
        className="container px-5 mx-auto max-w-screen-lg
      flex justify-between h-full"
      >
        <div className="flex items-center cursor-pointer">
          <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
            <img src="/images/logo.png" alt="Instagram" className="w-24 mt-1" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
            <button type="button" title="Home">
              <svg
                className="w-7 mr-5 text-black cursor-pointer"
                fill="262626"
                viewBox="0 0 48 48"
                height="22"
                width="22"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  // eslint-disable-next-line max-len
                  d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
                />
              </svg>
            </button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <button
              type="button"
              title="Sign Out"
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              <svg
                className="w-8 mr-5 text-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3
                      3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </Link>
          <div className="flex items-center cursor-pointer mr-4">
            <Link to={`/p/${user.username}`}>
              <img
                className="rounded-full h-8 w-8 flex"
                src={`/images/avatars/${user.username}.jpg`}
                alt={`${user.username} profile`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/users/userNotFound.png';
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
