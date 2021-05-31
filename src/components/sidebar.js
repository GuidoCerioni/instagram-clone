import { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import useUser from '../hooks/use-user';

export default function Sidebar() {
  const user = useUser();
  console.log(`user`, user.fullName);
  return <p>Im the sidebar</p>;
}
