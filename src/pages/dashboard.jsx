import { useEffect, useContext } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div
        className="flex justify-center relative
          container px-5 mx-auto max-w-screen-lg h-full
          lg:justify-between"
      >
        <div className="max-w-615">
          <Timeline />
        </div>
        <div
          className="w-72 hidden sidebar lg:block
           xl:right-1/6 2xl:right-1/4"
        ></div>
        <div
          className="w-72 hidden top-105 sidebar lg:fixed lg:block
           xl:right-1/6 2xl:right-1/4"
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
