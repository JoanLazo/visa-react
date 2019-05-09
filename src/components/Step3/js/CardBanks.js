import React from 'react';
import '../style/Step3.css';
 
const listOfBanks = ({ payments, getPayment, handleChange, calculatePayment, value, setViews }) => {
    return (
      <div>
        <button 
            type="button" 
            onClick={() => {
                if(payments <= 500 ) {
                    getPayment(500)
                  } 
                else {
                getPayment(payments - 500)
              }
          }}> - </button>
        <span>{payments}</span>
        <button type="button" onClick={() => getPayment(payments + 500)}> + </button>
        <select value={value} onChange={handleChange}>
          <option value="12">12 MESES</option>
          <option value="24">24 MESES</option>
          <option value="36">36 MESES</option>
        </select>
        <span>Tienes un prestamo de: S/ {payments}</span>
        <span>TCEA: 12%</span>
        <p>Intereses {calculatePayment(payments)[0]} a {value} meses</p>
        <p>Monto total: S/ {calculatePayment(payments)[1]}</p>
        <p>¿Cuánto voy a pagar? {calculatePayment(payments)[2]} mensuales</p>
        <button type="button" onClick={() => setViews('FourthScreen')}>PIDE TU PRÉSTAMO</button>
          
      </div>
  )
  };
  
  export default listOfBanks;