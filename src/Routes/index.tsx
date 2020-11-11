import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import SignUp from '../Pages/SignUp';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
