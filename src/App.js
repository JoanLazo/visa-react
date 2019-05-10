import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Lending from './components/Lending';

const app = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/lending" component={Lending} />
  </BrowserRouter>
);

export default app;
