import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found • InstagramClone';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="max-w-screen-lg">
        <p className="text-center text-2xl">Not found!</p>
      </div>
    </div>
  );
}
