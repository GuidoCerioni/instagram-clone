import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found • InstagramClone';
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-background mx-auto px-6">
        <div className="max-w-screen-lg">
          <p className="text-center font-semibold text-2xl mb-4">
            Sorry, this page isn`t available.
          </p>
          <p className="text-center font-normal text-md ">
            The link you followed may be broken, or the page may have been
            removed.
            <Link
              to={ROUTES.DASHBOARD}
              className="text-blue-medium  hover:text-blue-mediumHover"
            >
              {' '}
              Go back to Instagram.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
