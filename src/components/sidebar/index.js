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
      <User />
      <Suggestions />
    </div>
  );
}
// {user ? <p>user: {user.fullName}</p> : <p>not user</p>}
