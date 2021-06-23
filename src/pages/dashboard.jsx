import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import * as ROUTES from '../constants/routes';

export default function Dashboard({ user }) {
  const history = useHistory();

  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  if (!user) {
    // if user is empty
    history.push(ROUTES.LOGIN);
    return null;
  } else {
    return (
      <>
        <div className="bg-gray-background">
          <Header />
          <div
            className="grid grid-cols-4 gap-6
      container p-5 mx-auto max-w-screen-lg h-full"
          >
            <div className="col-span-3">
              <Timeline />
            </div>

            <div className="col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </>
    );
  }
}
