import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Lending from './components/Lending';

const app = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
    <Route path={`${process.env.PUBLIC_URL}/lending`} component={Lending} />
  </HashRouter>
);

export default app;
