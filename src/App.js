import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Lending from './components/Lending';

const app = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/lending" component={Lending} />
  </Switch>
);

export default app;
