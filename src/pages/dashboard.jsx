import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import UserContext from '../context/user';

import * as ROUTES from '../constants/routes';

export default function Dashboard() {
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  if (!user) {
    // if user is empty
    history.push(ROUTES.LOGIN);
    return null;
  } else {
    return (
      <div className="bg-gray-background">
        <Header />
        <div
          className="flex justify-center relative
      container p-5 mx-auto max-w-screen-lg h-full"
        >
          <div className="col-span-4 lg:col-span-3">
            <Timeline />
          </div>
          <div className="col-span-1 lg:hidden flex-grow"></div>
          <div className="hidden right-1/5 lg:fixed">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
