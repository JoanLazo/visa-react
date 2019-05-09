import React, { useState } from 'react';
import Layout from '../Layout';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';


const Lending = () => {
  const [step, setStep] = useState(1);
  const [registerValues, setRegisterValues] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const dataValues = (values) => {
    setRegisterValues(values);
  };

  const sendHandler = () => {
    const {
      name, lastName, email,
      dni, mobile, ruc, codeClient,
      tradeItem, password,
    } = registerValues;

    console.log(name, lastName);
  };

  return (
    <Layout>
      {step === 1 && (
      <StepOne nextStep={nextStep} />
      )}
      {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        dataValues={dataValues}
      />
      )}
      {step === 3 && (
      <StepThree
        nextStep={nextStep}
      />
      )}
      {step === 4 && ( // aquí debería ir sendHandler para enviar la data a firebase
        <StepFour
          sendHandler={sendHandler}
        //   cuotaMensual={cuotaMensual} // step3
        //   prestamo={prestamo} // step3
        //   interes={interes} // step3
        //   totalAPagar={totalAPagar} // step3
          nextStep={nextStep}
        //   nroCuentaValue={nroCuenta} // step4
        //   bankChoiceValue={nroCuenta}
        />
      )}
      {step === 5 && (
      <StepFive
        nextStep={nextStep}
      />
      )}

    </Layout>
  );
};

export default Lending;
