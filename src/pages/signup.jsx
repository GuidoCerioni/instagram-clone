import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const isInvalid =
    emailAddress === '' ||
    fullName === '' ||
    username === '' ||
    password === '';

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {}
  };

  useEffect(() => {
    document.title = 'Sign Up • InstagramClone';
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

            <p
              className="text-gray-base text-center text-lg font-bold
            py-3 w-5/6 mb-2 max-w-xxs"
            >
              Sign up to see photos and videos from your friends.
            </p>

            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <div className="mx-6">
              <form onSubmit={handleSignUp} method="POST" id="form-SignUp">
                <input
                  aria-label="Enter your email address"
                  type="text"
                  placeholder="Email address"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                />
                <input
                  aria-label="Enter your full name"
                  type="text"
                  placeholder="Full Name"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setFullName(target.value)}
                  value={fullName}
                />
                <input
                  aria-label="Enter your username"
                  type="text"
                  placeholder="Username"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setUserName(target.value)}
                  value={username}
                />
                <input
                  aria-label="Enter your password"
                  type="password"
                  placeholder="Password"
                  className="text-sm placeholder-gray-base w-full py-5 px-4 h-2
                   bg-gray-background border border-gray-primary rounded mb-2"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                />
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={`bg-blue-medium text-white w-full rounded h-8
                font-bold ${isInvalid && 'opacity-40'}`}
                >
                  Sign up
                </button>
              </form>
            </div>
            <p className="text-gray-base text-center text-xs w-11/12 py-3">
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy.
            </p>
          </div>
          <div
            className="flex justify-center items-center flex-col w-full
            bg-gray-background phone:bg-white
            phone:p-4 phone:border rounded border-gray-primary"
          >
            <p className="text-sm">
              Have an account?{` `}
              <Link to="/login" className="font-bold text-blue-medium">
                Log in
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
