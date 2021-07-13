import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import Header from '../components/header';
import NotFound from '../pages/not-found';
import { doesUsernameExist, getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const history = useHistory();
  const { username } = useParams();
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const user = await getUserByUsername(username);
      if (user) {
        setUserExist(true);
      } else {
        history.push(ROUTES.NOTFOUND);
      }
    }
    checkUser();
  }, [username, history]);

  return (
    <>
      <Header />
      <div className="flex">
        <img
          className="rounded-full h-8 w-8 flex"
          src={`/images/avatars/AAA.jpg`}
          alt={`AAA profile`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/users/userNotFound.png';
          }}
        />
        <div>
          <p>username</p>
        </div>
      </div>
    </>
  );
}
