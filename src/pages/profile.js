import { useState, useEffect, Suspense } from 'react';
import { useParams, useHistory } from 'react-router';
import Header from '../components/header';
import UserProfile from '../components/user-profile';
import IgLoader from '../components/ig-loader';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExist() {
      const user = await getUserByUsername(username);
      if (user) {
        setUser(user);
      } else {
        history.push(ROUTES.NOTFOUND);
      }
    }
    checkUserExist();
  }, [username, history]);
  return (
    <>
      <Header />
      {user ? <UserProfile user={user} /> : <IgLoader />}
    </>
  );
}
