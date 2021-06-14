import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import useUser from '../hooks/use-user';
import * as ROUTES from '../constants/routes';

export default function Dashoard() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  return (
    <>
      <div className="bg-gray-background">
        <Header />
        <div
          className="grid grid-cols-4
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
