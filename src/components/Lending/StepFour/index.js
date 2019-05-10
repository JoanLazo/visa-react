import React, { useState } from 'react';
import useForm from 'react-hook-form';
import Select from './Select';
import './stepfour.css';


const StepFour = ({
  sendHandler, cuotaMensual, prestamo, interes, totalAPagar, nextStep, selectedBank,
}) => {
  const { register, handleSubmit, __ } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    selectedBank(data);
    nextStep();
    sendHandler();
  }; // callback when validation pass

  const [bankChoice, setBankChoice] = useState('BANCO PICHINCHA');

  const onChange = (e) => {
    setBankChoice({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <section className="container">
        <div className="row">
          <div className="column-10">
            <div>
              <img src="https://user-images.githubusercontent.com/44485081/57436809-1dfcfc80-7206-11e9-8623-077f7cb1cbea.png" alt="paso 4" />
            </div>
            <div>
              {/* Aqui va el props de la imagen de la empresa escogida por el usuario */}
              <img src="https://user-images.githubusercontent.com/44485081/57452697-13545e80-722a-11e9-9af5-45c61b80f1a4.jpg" alt="Prestamype" />
            </div>
            <h2 className="color-yellow">¡YA FALTA POCO PARA RECIBIR TU PRÉSTAMO!</h2>
            <div className="d-flex flex-row">
              <div className="ml-5 pt-5">
                <p>Cuota</p>
                <div className="color-gris">
                  {/* aqui va el props de cuota mensual */}
                  <h5 className="bolt text-baner">s/. {cuotaMensual}</h5>
                  <p className="bolt text-mensual">mensuales</p>
                </div>
              </div>
              <div className="d-flex flex-column ml-5 pt-5 color-black">
                <p>Resumen del Préstamo</p>
                <div className="d-flex flex-row color-gris">
                  <div className="mr-2">
                    <p className="ml-3">Préstamo</p>
                    {/* aqui va el monto del prestamo */}
                    <div className="d-flex">
                      <p className="ml-3">{prestamo}</p>
                      <p className="ml-3 color-yellow">+</p>
                    </div>

                  </div>
                  <div className="mr-2">
                    <p className="ml-1">Intereses</p>
                    {/* aqui va el monto del interes */}
                    <div className="d-flex">
                      <p className="ml-2">{interes}</p>
                      <p className="ml-2 color-yellow">=</p>
                    </div>

                  </div>
                  <div className="mr-2">
                    <p className="ml-2">Total a Pagar</p>
                    {/* aqui va el monto total a pagar */}
                    <p className="bolt">{totalAPagar}</p>
                  </div>
                </div>
              </div>
              <div />
            </div>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
              <h6>Datos</h6>
              <Select onChange={onChange} bankChoice={bankChoice} />
              {bankChoice === 'BANCO PICHINCHA'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 15 })} />
             )}
              {bankChoice === 'BANCO DE CREDITO'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 15 })} />
             )}
              {bankChoice === 'BBVA CONTINENTAL'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 18 })} />
             )}
              {bankChoice === 'BANCO INTERBANK'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 17 })} />
             )}
              {bankChoice === 'BANCO DE LA NACION'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 14 })} />
             )}
              {bankChoice === 'MI BANCO'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 18 })} />
             )}
              {bankChoice === 'SCOTIABANK'
             && (<input name="bank" placeholder={bankChoice} ref={register({ pattern: /\d+/, maxLength: 20 })} />
             )}


              <div>
                <input type="checkbox" />Acepto <span><a href="">términos y condiciones</a></span> <br />
                <input type="checkbox" />Acepto <span><a href="">compartir los datos de ventas de Visanet con la entidad financiera.</a></span>
              </div>

              <input type="submit" className="col-5 btn-prestamo color-black bckg-yellow" value="RECIBIR MI PRÉSTAMO" />
            </form>
            <div>
              <h5 className="mt-5">ATENCIÓN AL CLIENTE:</h5>
            </div>
            <img src="https://user-images.githubusercontent.com/44485081/57443843-8ce15200-7214-11e9-811d-caed0f7026fc.jpg" alt="atención al cliente" />
          </div>
        </div>

      </section>
    </React.Fragment>
  );
};
export default StepFour;
