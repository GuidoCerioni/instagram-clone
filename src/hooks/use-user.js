// get info from firebase
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const [error, setError] = useState(null);
  const {
    user: { uid: userId },
  } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjectByUserId() {
      try {
        const response = await getUserByUserId(userId);
        setActiveUser(response);
      } catch (error) {
        setError(error);
      }
    }
    // if i have userId, i call the async function
    if (userId) {
      getUserObjectByUserId();
    }
  }, [userId]);
  if (error) {
    return { error: error };
  } else {
    return { user: activeUser };
  }
}
