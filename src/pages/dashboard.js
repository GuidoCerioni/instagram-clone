import { useEffect, useContext } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-background">
        <div
          className="flex justify-center container
        px-5 mx-auto max-w-screen-lg h-full"
        >
          <div className="max-w-615">
            <Timeline />
          </div>
          <div className="w-72 ml-8 hidden lg:block">
            <div className="fixed w-72">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
