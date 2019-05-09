import React from 'react';
import './step-four.css';

const StepFour = () => (
 <section>
     <div>
        <img src="https://user-images.githubusercontent.com/44485081/57436809-1dfcfc80-7206-11e9-8623-077f7cb1cbea.png" alt="paso 4"></img>
     </div>
    <div>
        <img src="https://user-images.githubusercontent.com/44485081/57452697-13545e80-722a-11e9-9af5-45c61b80f1a4.jpg" alt="Prestamype"></img>
    </div>
    <h2 className="color-yellow">¡YA FALTA POCO PARA RECIBIR TU PRÉSTAMO!</h2>
    <div>
    <div>
        <p>Cuota</p>
            <div>
                <p></p>
                <p>mensuales</p>
             </div>
        </div>
        <div>
        <p>Resumen del Préstamo</p>
            <div>
                <div>
                  <p>Préstamo</p>
                  <p></p>
                  <p>+</p>
                </div>
                <div>
                  <p>Intereses</p>
                  <p></p>
                  <p>=</p>
                </div>
                <div>
                  <p>Total a Pagar</p>
                  <p></p>
                </div>
             </div>
        </div>
        <div>
        
    </div>
    </div>
    <form>
        <h6>Datos</h6>
        <label>Ingresa el N° de cuenta donde se depositará tu préstamo
        <input type="text"></input>
        </label>
        <label>Banco
        <input type="text" name="banco"></input>
        </label>
        {/* <label>
        <input type="checkbox">Acepto<a href="">términos y condiciones</a></input>
        </label> */}
        {/* <label>
        <input type="checkbox">Acepto <a href="">compartir los datos de ventas</a></input>
        </label>
     */}
        <button className="btn-prestamo">RECIBIR MI PRÉSTAMO</button>
</form>
<div>
 <h4>ATENCIÓN AL CLIENTE:</h4>
</div>
 <img src="https://user-images.githubusercontent.com/44485081/57443843-8ce15200-7214-11e9-811d-caed0f7026fc.jpg" alt="atención al cliente"></img>
 </section>
);
export default StepFour;