import React from 'react';
import './stepfour.css';

const StepFour = () => (
 <section className="container">
 <div className="row">
 <div className="column-10">
 <div>
        <img src="https://user-images.githubusercontent.com/44485081/57436809-1dfcfc80-7206-11e9-8623-077f7cb1cbea.png" alt="paso 4"></img>
     </div>
    <div>
    {/* Aqui va el props de la imagen de la empresa escogida por el usuario */}
        <img src="https://user-images.githubusercontent.com/44485081/57452697-13545e80-722a-11e9-9af5-45c61b80f1a4.jpg" alt="Prestamype"></img>
    </div>
    <h2 className="color-yellow">¡YA FALTA POCO PARA RECIBIR TU PRÉSTAMO!</h2>
    <div className="d-flex flex-row">
    <div className="ml-5 pt-5">
        <p>Cuota</p>
            <div className="color-gris">
            {/*aqui va el props de cuota mensual*/}
                <p className="bolt">s/. 377.78</p>
                <p className="bolt text-mensual">mensuales</p>
             </div>
        </div>
        <div className="d-flex flex-column ml-5 pt-5 color-black">
        <p>Resumen del Préstamo</p>
            <div className="d-flex flex-row color-gris">
                <div className="mr-2">
                  <p className="ml-3">Préstamo</p>
                  {/* aqui va el monto del prestamo*/}
                  <div className="d-flex">
                  <p className="ml-3">10,000</p>
                  <p className="ml-3">+</p>
                  </div>
                  
                </div>
                <div className="mr-2">
                  <p className="ml-1">Intereses</p>
                  {/* aqui va el monto del interes */}
                  <div className="d-flex">
                  <p className="ml-2">3,600</p>
                  <p className="ml-2">=</p>
                  </div>
                  
                </div>
                <div className="mr-2">
                  <p className="ml-2">Total a Pagar</p>
                  {/* aqui va el monto total a pagar */}
                  <p className="bolt">13,600</p>
                </div>
             </div>
        </div>
        <div>
        
    </div>
    </div>
    <form className="d-flex flex-column">
        <h6>Datos</h6>
        <label>Ingresa el N° de cuenta donde se depositará tu préstamo</label>
        <input className="border-yellow-input" type="text"></input>
        <label>Banco </label>
        <input className="border-yellow-input" type="text" name="banco"></input>
        <div>
        <input type="checkbox"></input>Acepto <span><a href="">términos y condiciones</a></span> <br/>
        <input type="checkbox"></input>Acepto <span><a href="">compartir los datos de ventas de Visanet con la entidad financiera.</a></span>
        </div>
        
        <button className="col-5 btn-prestamo color-black bckg-yellow">RECIBIR MI PRÉSTAMO</button>
    </form>
<div>
 <h4>ATENCIÓN AL CLIENTE:</h4>
</div>
 <img src="https://user-images.githubusercontent.com/44485081/57443843-8ce15200-7214-11e9-811d-caed0f7026fc.jpg" alt="atención al cliente"></img>
 </div>
 </div>
    
 </section>
);
export default StepFour;