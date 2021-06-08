// get info from firebase
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  // i need user.UID
  useEffect(() => {
    async function getUserObjectByUserId() {
      try {
        const response = await getUserByUserId(user.uid);
        setActiveUser(response);
      } catch (error) {
        setError(error);
      }
    }
    // if i have user, i call the async function
    if (user) {
      getUserObjectByUserId();
    }
  }, [user]);
  if (error) {
    return { error: error };
  } else {
    return { user: activeUser };
  }
}
