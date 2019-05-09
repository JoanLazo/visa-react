import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';
import Toolbar from '../Toolbar';

const layout = ({ children }) => (
    <>
      <Toolbar />
      <main className={styles.Content}>
        {children}
      </main>
    </>
  );

export default layout;

Layer.propTypes = {
  children: PropTypes.element.isRequired,
};