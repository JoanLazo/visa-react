import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
// import StepFour from './StepFour';
// import StepFive from './StepFive';


const Lending = () => {
  const [step, setStep] = useState(1);
  const [registerUser, setRegisterUser] = useState({});
  const [choiceBank, setChoiceBank] = useState({});

  useEffect(() => {
    console.log(registerUser);
  }, [registerUser]);

  useEffect(() => {
    console.log(choiceBank);
  }, [choiceBank]);

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
      {/* {step === 4 && ( // aquí debería ir sendHandler para enviar la data a firebase
        <StepFour
          sendHandler={sendHandler}
          cuotaMensual={cuotaMensual} // step3
          prestamo={prestamo} // step3
          interes={interes} // step3
          totalAPagar={totalAPagar} // step3
          nextStep={nextStep}
          nroCuentaValue={nroCuenta} // step4
          bankChoiceValue={nroCuenta}
        />
      )} */}
      {/* {step === 5 && (
      <StepFive
        nextStep={nextStep}
      />
      )} */}

    </Layout>
  );
};

export default Lending;
