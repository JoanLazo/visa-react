import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layer.module.css';
import Toolbar from '../Toolbar';

const Layout = ({ children }) => {

  return (
    <>
      <Toolbar />
      <main className={styles.Content}>
        {children}
      </main>
    </>
  );
};

export default Layout;

Layer.propTypes = {
  children: PropTypes.element.isRequired,
};