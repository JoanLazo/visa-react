import React from 'react';
import './ComponentStepOne.css';

const componentStepOne = ({
  addMoney, quantity, subtractMoney, time, onChange, nextStep
}) => (
  <>
    <div className="text-center mt-5">
      <h3 className="font-weight-bold mb-4">HOLA EMPRENDEDORA,</h3>
      <h5 className="font-weight text-center mt-3">Te otorgamos un préstamo para que puedas seguir creciendo</h5>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <img className="mb-5 mt-4" src="https://i.ibb.co/0DCHVbV/barra-de-pasos.png" />
       </div>
      </div>
    </div>


    <div className="container my-5">
      <p className="title color-base text-link m-5"> Calcula tu préstamo</p>
      <div className="container mt-20">
        <div className="row  justify-content-around">
          <div className="col-md-3">
            <p className="questions">¿Cúanto dinero necesitas?</p>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-2 color-patito d-flex justify-content-center align-items-center" onClick={() => addMoney(quantity)}>
                  <p className="bold-white">-</p>
                </div>
                <div className="col-7 color-div d-flex justify-content-center align-items-center">S/
                  {quantity}
                </div>
                <div className="col-2 color-patito d-flex justify-content-center align-items-center" onClick={() => subtractMoney(quantity) }>
                  <p className="bold-white ">+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="questions">¿Cuánto tiempo?</p>
            <select className=" color-div form-control" name="time" value={time} onChange={onChange}>
              <option value="12"> 12 MESES</option>
              <option value="24"> 24 MESES</option>
              <option value="36"> 36 MESES</option>
              <option value="48"> 4 AÑOS</option>
              <option value="60"> 5 AÑOS</option>

            </select>
          </div>
          <div className="col-md-3">
            <p className="questions">Debo pagar</p>
            <span className="font-weight-bold display-4">S/.{(quantity * 1.12 / time).toFixed(2)}</span>
          </div>
          <div className="col-md-3">
            <p className="questions">Resumen de Pago</p>
            <small>
              <div className="container mb-5">
                <div className="row color-div justify-content-around">
                  <div className=" col-md-1 p-0">
                    <div className="d-flex flex-column">
                      <div className="p-2">Préstamo</div>
                      <div className="p-2">{quantity}</div>
                    </div>

                  </div>
                  <div className=" col-md-1">
                    <div className="d-flex flex-column">
                      <div className="p-2">Intereses</div>
                      <div className="p-2">{quantity * 0.12}</div>
                    </div>

                  </div>
                  <div className=" col-md-1">
                    <div className="d-flex flex-column">
                      <div className="p-2">Total a pagar</div>
                      <div className="p-2">{Math.round(quantity * 1.12)}</div>
                    </div>
                  </div>
                </div>


              </div>
            </small>
          </div>

        </div>

      </div>

    </div>

    <div className="container">
      <div className="row  text center justify-content-around">
        <div className="col-md-12 justify-content-start align-items-start mr-5 margin-r">
          <span>Préstamo basado en TCEA 12%</span>
          <div mt-5>
            <h5>IMPORTANTE</h5>
            <p className="color-div">El préstamo será otorgado por la entidad financiera elegida. Juntas y VisNet no es respnsable de la gestión de crédito</p>
          </div>
        </div>
        <div className=" col-md-4 d-flex justify-content-end align-items-center ">
          <div>
            <h5>Ver cronograma</h5>
          </div>
          <div>
            <button className="btn bg-base btn-lg" onClick={() => nextStep()}>SOLICITAR</button>
          </div>
        </div>

      </div>
    </div>
  </>
);


export default componentStepOne;
