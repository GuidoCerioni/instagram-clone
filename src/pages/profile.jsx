import { useState, useEffect, Suspense } from 'react';
import { useParams, useHistory } from 'react-router';
import Header from '../components/header';
import UserProfile from '../components/user-profile';
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
        setUser(response);
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
      {userExist ? <UserProfile profile={user} /> : <IgLoader />}
    </>
  );
}
