import React, { useState } from 'react';
import Bank from './Bank';
import FilterChoice from './filterChoice';

const dataBank = [
  { name: 'PrestaMype', tcea: 1.12 },
  { name: 'Caja Huancayo', tcea: 1.20 },
  { name: 'BCP', tcea: 1.20 },
  { name: 'Caja Arequipa', tcea: 1.25 },
];

const StepThree = ({ selectBank, nextStep }) => {
  const [quantity, setQuantity] = useState(10000);
  const [time, setTime] = useState(12);

  const addMoney = () => {
    setQuantity(quantity + 1000);
  };

  const subtractMoney = () => {
    setQuantity(quantity - 1000);
  };

  const onChange = (e) => {
    setTime({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FilterChoice
        quantity={quantity}
        time={time}
        addMoney={addMoney}
        subtractMoney={subtractMoney}
        onChange={onChange}
      />
      {dataBank.map(doc => (
        <Bank
          amount={quantity}
          tcea={Math.round(doc.tcea * 100 - 100)}
          cuota={(quantity * doc.tcea / time).toFixed(2)}
          time={time}
        // imgBank={}
          interes={Math.round(quantity * (doc.tcea * 100 - 100) / 100)}
          nameBank={doc.name}
          totalAmount={Math.round(quantity * doc.tcea)}
          selectBank={selectBank}
          nextStep={nextStep}
        />
      ))}
    </>
  );
};

export default StepThree;
