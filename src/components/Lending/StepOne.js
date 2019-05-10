import React from 'react';


const stepOne = ({ nextStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <h1>Paso 1</h1>
      <button type="button" onClick={continueHandler}>continuar</button>
    </>
  );
};

export default stepOne;
