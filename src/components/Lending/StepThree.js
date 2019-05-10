import React from 'react';


const stepThree = ({ nextStep }) => {
  const continueHandler = (e) => {
    e.prevent.default();
    nextStep();
  };

  return (
    <>
      <h1>Paso 3</h1>
      <button type="button" onClick={continueHandler}>continuar</button>
    </>
  );
};

export default stepThree;
