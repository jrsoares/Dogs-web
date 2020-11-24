import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOM,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from '../Context/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { data } = React.useContext(AuthContext);
  return (
    <ReactDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!data.user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
