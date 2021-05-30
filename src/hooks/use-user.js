// get info from firebase
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext); // i need user.UID

  useEffect(() => {
    async function getUserObjectByUserId(params) {
      const response = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    // if i have user, i call the function
    if (user.uid) getUserObjectByUserId();
  }, [user]);

  return { user: activeUser };
}
