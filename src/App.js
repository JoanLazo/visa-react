import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';

const app = () => (
  <Layout>
    <Switch>
      <Route path="/network-contact" component={} />
      <Route path="/lending" exact component={} />
    </Switch>
  </Layout>
);

export default app;
