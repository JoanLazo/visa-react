import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './NavItem.module.css';

const navItem = ({
  link, exact, children,
}) => (
  <li className={styles.NavItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={styles.active}
    >
      {children}

    </NavLink>
  </li>
);

export default navItem;

navItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};