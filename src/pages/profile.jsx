import { useState, useEffect, Suspense } from 'react';
import { useParams, useHistory } from 'react-router';
import Header from '../components/header';
import IgLoader from '../components/ig-loader';

import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const history = useHistory();
  const { username } = useParams();
  const [userExist, setUserExist] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    async function checkUser() {
      const response = await getUserByUsername(username);
      if (response) {
        setUserExist(true);
        setUser(response);
      } else {
        history.push(ROUTES.NOTFOUND);
      }
    }
    checkUser();
  }, [username, history]);
  console.log(`user`, user);
  return (
    <>
      <Header />
      {userExist ? (
        <div className="flex">
          <img
            className="rounded-full h-8 w-8 flex"
            src={`/images/avatars/${user.username}.jpg`}
            alt={`${user.username} profile`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/users/userNotFound.png';
            }}
          />
          <div>
            <p>{user.username}</p>
          </div>
        </div>
      ) : (
        <IgLoader />
      )}
    </>
  );
}
