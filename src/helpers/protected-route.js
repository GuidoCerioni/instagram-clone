import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({
  user,
  children,
  redirectTo,
  ifUser,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        // when ifUser true, dont render the child if i have a user
        // when ifUser false, render the child just if i have a user
        if (ifUser) {
          if (!user) {
            return children;
          } else {
            return (
              <Redirect
                to={{
                  pathname: redirectTo,
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        } else {
          if (user) {
            return children;
          } else {
            return (
              <Redirect
                to={{
                  pathname: redirectTo,
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }
      }}
    />
  );
}
ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.object,
  user: PropTypes.object,
  ifUser: PropTypes.bool,
  location: PropTypes.any,
};
