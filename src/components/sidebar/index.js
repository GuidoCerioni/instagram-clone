import { useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const { user } = useUser();
  console.log(`user`, user);
  return (
    <div>
      <User username={user.username} fullName={user.fullName} />
      <Suggestions userId={user.userId} />
    </div>
  );
}
