import React from 'react';

const bank = ({
  amount, tcea, cuota, time, imgBank, interes, nameBank, totalAmount, selectBank, nextStep,
}) => (
  <div>
    <h3>{nameBank}</h3>
    {/* <img href={imgBank} alt="" /> */}
    <span>Tienes un prestamo de: S/ {amount}</span>
    <span>TCEA: {tcea}</span>
    <p>Intereses {interes} a {time} meses</p>
    <p>Monto total: S/ {totalAmount}</p>
    <p>¿Cuánto voy a pagar? {cuota} mensuales</p>
    <button
      type="button"
      onClick={() => {
        selectBank({
          amount, tcea, cuota, time, imgBank, interes, nameBank, totalAmount,
        });
        nextStep();
      }}
    >PIDE TU PRÉSTAMO
    </button>

  </div>
);

export default bank;
