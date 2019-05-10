import React from 'react';

import NavBar from './NavBar';

const toolbar = () => (
  <header className="d-flex color-white text-mini bckg-yellow aling-contend-end">
    <div className="flex-column">
      <h1 className="color-black text-toolbar ml-5 mt-3">MUJER</h1>
      <h1 className="color-black text-toolbar ml-5 pb-2">EMPRENDEDORA</h1>
    </div>
    <nav>
      <NavBar />
    </nav>
  </header>
);

export default toolbar;
