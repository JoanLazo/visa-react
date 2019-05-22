/* eslint-disable import/no-named-as-default-member */
import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import StepTwo from './StepTwo';
// eslint-disable-next-line import/no-named-as-default
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';


const Lending = () => {
  const [step, setStep] = useState(1);
  const [registerUser, setRegisterUser] = useState({});
  const [choiceBank, setChoiceBank] = useState({});
  const [deposit, setDeposit] = useState(0);

  useEffect(() => {
    console.log(registerUser);
  }, [registerUser]);

  useEffect(() => {
    console.log(choiceBank);
  }, [choiceBank]);

  useEffect(() => {
    console.log(deposit);
  }, [deposit]);

  const sendHandler = () => {
    console.log('Se envia a firebase');
  };

  const selectBank = (values) => {
    setChoiceBank(values);
  };

  const nextStep = () => {
    setStep(step + 1);
  };


  return (
    <Layout>
      {step === 1 && (
      <StepOne nextStep={nextStep} />
      )}
      {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        inputValues={values => setRegisterUser(values)}
      />
      )}
      {step === 3 && (
      <StepThree
        nextStep={nextStep}
        selectBank={selectBank}
      />
      )}
      {step === 4 && ( // aquí debería ir sendHandler para enviar la data a firebase
        <StepFour
          sendHandler={sendHandler}
          cuotaMensual={choiceBank.cuota} // step3
          prestamo={choiceBank.amount} // step3
          interes={choiceBank.interes} // step3
          totalAPagar={choiceBank.totalAmount} // step3
          nextStep={nextStep}
          selectedBank={data => setDeposit(data)}
        />
      )}
      {step === 5 && (
      <StepFive />
      )}

    </Layout>
  );
};

export default Lending;
