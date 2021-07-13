import react, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import ProtectedRoute from './helpers/protected-route';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(() => import('./pages/dashboard'));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense
          fallback={
            <div
              className="container
                flex h-screen
                justify-center
                items-center"
            >
              Loading..
            </div>
          }
        >
          <Switch>
            <ProtectedRoute
              path={ROUTES.DASHBOARD}
              exact
              redirectTo={ROUTES.LOGIN}
              user={user}
              ifUser={false}
            >
              <Dashboard />
            </ProtectedRoute>

            <ProtectedRoute
              path={ROUTES.LOGIN}
              exact
              redirectTo={ROUTES.DASHBOARD}
              user={user}
              ifUser={true}
            >
              <Login />
            </ProtectedRoute>

            <ProtectedRoute
              path={ROUTES.SIGNUP}
              exact
              redirectTo={ROUTES.DASHBOARD}
              user={user}
              ifUser={true}
            >
              <SignUp />
            </ProtectedRoute>

            <Route path={ROUTES.NOTFOUND} component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
