import React from 'react';
 
const ViewLoans = ({ name, img,loan, tcea, interest, total }) => {
  return (
    <div>
      <span>{name}</span>
      <span> <img href={img}></img></span>
      <span>Tienes un prestamo de: S/ {total}</span>
      <span>TCEA: {tcea}</span>
      <p>Intereses {interest} a 12 meses</p>
      <p>Monto total: S/ </p>
      <p>¿Cuánto voy a pagar? {loan} mensuales</p>
      <button type="button">PIDE TU PRÉSTAMO</button>
        
    </div>
)
};

export default ViewLoans;