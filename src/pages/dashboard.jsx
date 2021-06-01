import { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashoard() {
  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <Timeline />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
