import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const isInvalid = emailAddress === '' || password === '';

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
      document.getElementById('form-login').reset();
    }
  };

  useEffect(() => {
    document.title = 'Login • InstagramClone';
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div
        className="container flex flex-grow mx-auto max-w-4xl
        justify-center phone:items-center h-5/6 mb-auto"
      >
        <div className="hidden md:flex">
          <img
            src="./images/iphone-with-profile.jpg"
            alt="iPhone with Instagram profile"
            className="max-w-sm"
          />
        </div>
        <div className="flex flex-col w-full max-w-sm phone:w-11/12 md:w-2/5">
          <div
            className="flex flex-col items-center p-4 phone:mb-4
            bg-gray-background phone:bg-white
            phone:border rounded border-gray-primary"
          >
            <h1 className="flex justify-center w-full">
              <img
                src="/images/logo.png"
                alt="Instagram"
                className="mt-2 mb-4 max-w-xxxs"
              />
            </h1>

            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <div className="mx-6">
              <form
                onSubmit={handleLogin}
                method="POST"
                id="form-login"
                autoComplete="new-password"
              >
                <input
                  aria-label="Enter your email address"
                  type="text"
                  placeholder="Email address"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2
                   focus:ring-2 focus:ring-blue-medium"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                />
                <input
                  aria-label="Enter your password"
                  type="password"
                  placeholder="Password"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2
                   focus:ring-2 focus:ring-blue-medium"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                />
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={`bg-blue-medium text-white w-full rounded h-8
                font-bold focus:outline-none ${isInvalid && 'opacity-40'}`}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
          <div
            className="flex justify-center items-center flex-col w-full
            bg-gray-background phone:bg-white
            p-4 phone:border rounded border-gray-primary"
          >
            <p className="text-sm">
              Don`t have an account?{` `}
              <Link to={ROUTES.SIGNUP} className="font-bold text-blue-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <footer
        className="container mx-auto mb-2 w-11/12
          flex justify-around items-center
          text-xs text-gray-base"
      >
        <a href="https://www.instagram.com/">About</a>
        <a href="https://www.instagram.com/">Blog</a>
        <a href="https://www.instagram.com/">Help</a>
        <a href="https://www.instagram.com/">Location</a>
        <a href="https://www.instagram.com/">API</a>
        <a href="https://www.instagram.com/">Hashtags</a>
        <a href="https://www.instagram.com/">Location</a>
      </footer>
    </div>
  );
}
