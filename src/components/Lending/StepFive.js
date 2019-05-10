import React from 'react';


const stepFive = ({ nextStep }) => {
  const continueHandler = (e) => {
    e.prevent.default();
    nextStep();
  };

  return (
    <>
      <h1>Paso 5</h1>
      <button type="button" onClick={continueHandler}>continuar</button>
    </>
  );
};

export default stepFive;
