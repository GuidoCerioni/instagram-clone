import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
ProtectedRoute.propTypes = {
  children: PropTypes.object,
  user: PropTypes.object,
  location: PropTypes.any,
};
