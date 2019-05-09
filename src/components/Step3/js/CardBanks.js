import React from 'react';
import '../style/Step3.css';
import '.../Home/Home.css';
 
const ListOfBanks = ({ name, img,loan, payment, tcea, interest, total }) => {
  return (
    <div className="card">
        <div className="all-banks ">
        <span>{name}</span>
        <span> 
            <img src={img}/>
        </span>
        <span>Tienes un prestamo de: S/ {loan}</span>
        <span>TCEA: {tcea}</span>
        <p>Intereses S/{interest} a 12 meses</p>
        <p>¿Cuánto voy a pagar? s/{payment} mensuales</p>
        <p>Monto total: S/{total} </p>
        <button className="bckg-pink"type="button">PIDE TU PRÉSTAMO</button>
        <p>ver más</p>
        </div>
    </div>
)
};

export default ListOfBanks;