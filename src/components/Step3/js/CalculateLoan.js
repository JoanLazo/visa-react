import React from 'react';
import { Link } from 'react-router-dom';
import './calculateLoan.css';
import Layout from './layout';

const getLoan = ({payment, getPayment, handleChange, calculatePayment, value, setViews }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/#" >MUJER EMPRENDEDORA</a>      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/prestamo">PIDE PRÉSTAMO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactos">RED DE CONTACTOS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/negocio">HAZ CRECER TU NEGOCIO</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Layout />
    <p className="pink ml-5 mb-4 mt-5">Calcula tu préstamo</p>
    <div>
      <span className="ml-5">¿Cuánto dinero necesitas?</span>
      <button 
        type="button" 
        onClick={() => {
          if(payment <= 500 ) {
            getPayment(500)
          } else {
            getPayment(payment - 500)
          }
      }}> - </button>
      <span>{payment}</span>
      <button type="button" onClick={() => getPayment(payment + 500)}> + </button>
      <span>¿Cuánto tiempo?</span>
      <select value={value} onChange={handleChange}>
        <option value="12">12 MESES</option>
        <option value="24">24 MESES</option>
        <option value="36">36 MESES</option>
      </select>
      <p>Debo pagar: {calculatePayment(payment)[2]} Mensuales</p>
      <div>
      <p>Interes: {calculatePayment(payment)[0]}</p>
      <p>Debo pagar: S/ {calculatePayment(payment)[1]} </p>
      <p>Cuota: {calculatePayment(payment)[2]}</p>
      </div>
      <span>Préstamo basado en TCEA de 12%</span>
      <div>
        <h4>IMPORTANTE</h4>
        <div>El préstamo será otorgado por la entidad financiera elegida. Juntas y VisaNet no es responsable de la gestión del crédito.
        </div>
      </div>
      <button type="button" onClick={() => setViews('SecondScreen')}>SOLICITAR</button>
    </div> 
  </>
  )
};

export default getLoan;