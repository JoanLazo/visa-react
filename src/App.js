import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home/Home';

const app = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/network-contact" component={} />
      <Route path="/lending" component={} />
    </Switch>
  </Layout>
);

export default app;
