import React from 'react';


const stepFour = ({ nextStep }) => {
  const continueHandler = (e) => {
    e.prevent.default();
    nextStep();
  };

  return (
    <>
      <h1>Paso 4</h1>
      <button type="button" onClick={continueHandler}>continuar</button>
    </>
  );
};

export default stepFour;
