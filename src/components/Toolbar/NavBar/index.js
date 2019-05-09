import React from 'react';

import NavItem from '../NavItem';

const navBar = () => (
  <ul>
    <NavItem link="/lending" exact>PIDE TU PRÉSTAMO</NavItem>
    <NavItem link="/network-contact">RED DE CONTACTOS</NavItem>
    <NavItem link="/grow-business">HAZ CRECER TU NEGOCIO</NavItem>
    {/* <NavItem link="/signin">INICIAR SESIÓN</NavItem>
    <NavItem link="/signup">CREAR CUENTA</NavItem> */}
  </ul>
);

export default navBar;