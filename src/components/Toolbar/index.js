import React from 'react';

import PropTypes from 'prop-types';
import NavBar from './NavBar';

const toolbar = ({  }) => (
  <header>
    <h1>MUJER EMPRENDEDORA</h1>
    <nav>
      <NavBar />
    </nav>
  </header>
);

export default toolbar;

toolbar.propTypes = {
  toggleDrawerClicked: PropTypes.func.isRequired,
};