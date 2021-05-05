import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setpassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - InstagramClone';
  }, []);

  return (
    <div
      className="container flex mx-auto
    max-w-screen-md items-center h-screen"
    >
      <div className="flex w-3/5 max-w-{454px}">
        <img
          src="./images/iphone-with-profile.jpg"
          alt="iPhone with Instagram profile"
          className="max-w-{200px}"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <p>im a form</p>
        <form action="">
          <input type="text" name="username" id="username" placeholder="Username"/>
          <input type="text" name="password" id="password" placeholder="Password"/>
        </form>
      </div>
    </div>
  );
}
