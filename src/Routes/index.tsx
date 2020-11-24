import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
