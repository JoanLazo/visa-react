import React from 'react';
import './stepfour.css';

const stepFour = ({sendHandler, empresaImg, cuotaMensual, prestamo, interes, totalaPagar }) => {
    
    const continueHandler = (e, inputCuenta, inputBanco  ) => {
        e.preventDefault();
        sendHandler();
    }

 return(
     <React.Fragment>
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
                <h5 className="bolt text-baner">s/. 377.78</h5>
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
                  <p className="ml-3 color-yellow">+</p>
                  </div>
                  
                </div>
                <div className="mr-2">
                  <p className="ml-1">Intereses</p>
                  {/* aqui va el monto del interes */}
                  <div className="d-flex">
                  <p className="ml-2">3,600</p>
                  <p className="ml-2 color-yellow">=</p>
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
        <input className="border-yellow-input" type="text" name="cuenta"></input>
        <label>Banco</label>
        <select className="border-yellow-input"  name="banco">
            <option value="BANCO BNG">BANCO BNG</option>
            <option value="BANCO DE CREDITO">BANCO DE CREDITO DEL PERÚ</option>
            <option value="BANCO CONTINENTAL">BANCO CONTINENTAL (BBVA)</option>
            <option value="BANCO INTERBANK">BANCO INTERBANK</option>
            <option value="BANCO DE LA NACION">BANCO DE LA NACION</option>
        </select>
        <div>
        <input type="checkbox"></input>Acepto <span><a href="">términos y condiciones</a></span> <br/>
        <input type="checkbox"></input>Acepto <span><a href="">compartir los datos de ventas de Visanet con la entidad financiera.</a></span>
        </div>
        
        <button className="col-5 btn-prestamo color-black bckg-yellow" onClick = { () => continueHandler() }>RECIBIR MI PRÉSTAMO</button>
    </form>
<div>
 <h5 className="mt-5">ATENCIÓN AL CLIENTE:</h5>
</div>
 <img src="https://user-images.githubusercontent.com/44485081/57443843-8ce15200-7214-11e9-811d-caed0f7026fc.jpg" alt="atención al cliente"></img>
 </div>
 </div>
    
 </section>
 </React.Fragment>
 );
};
export default stepFour;