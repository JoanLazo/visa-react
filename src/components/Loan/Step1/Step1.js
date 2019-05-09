import React, { Component } from 'react';

class App extends Component {

    render() {
        return(
            <div>
                 <div class="text-center mt-5">
                <h3 class="font-weight-bold">HOLA EMPRENDEDORA,</h3>
                <h5 class="font-weight text-center mt-3">Te otorgamos un préstamo para que puedas seguir creciendo</h5>
                <div class="container mt-5">
                    <div class="row justify-content-center">
                    <img src="https://i.ibb.co/0DCHVbV/barra-de-pasos.png"></img>

                    </div>
                </div>
                </div>


                <div className="container my-5">
                <p class="title"> Calcula tu préstamo</p>
                <div className="container mb-5">
                    <div className="row  justify-content-around">
                        <div className="col-md-3">
                             <p>¿Cúanto dinero necesitas?</p>
                             <div className="container">
                                <div className="row justify-content-between">
                                <div className="col-2 d-flex justify-content-center align-items-center"
                                onClick={() => {this.props.addMoney(this.props.quantity)}}>
                                -
                                </div>
                                <div className="col-7 d-flex justify-content-center align-items-center">S/
                                     {this.props.quantity}</div>
                                <div className="col-2 d-flex justify-content-center align-items-center"
                                onClick={() => {this.props.subtractMoney(this.props.quantity)}}>
                                +
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p>¿Cuánto tiempo?</p>
                            <select className="form-control"
                            name="time"
                            value={this.props.time}
                            onChange={this.props.onChange}
                            >
                            <option value="12"> 12 MESES</option>
                            <option value="24"> 24 MESES</option>
                            <option value="36"> 36 MESES</option>
                            <option value="48"> 4 AÑOS</option>
                            <option value="60"> 5 AÑOS</option>

                            </select>
                        </div>
                        <div className="col-md-3">
                            <p>Debo pagar</p>
                            <span>{(this.props.quantity*1.12/this.props.time).toFixed(2)}</span>
                        </div>
                        <div className="col-md-3">
                            <p>Resumen de Pago</p>
                            <div className="container mb-5">
                                <div className="row justify-content-around">
                                    <div className=" col-md-1">
                                         <div class="d-flex flex-column">
                                             <div class="p-2">Préstamo</div>
                                             <div class="p-2">{this.props.quantity}</div>
                                         </div>
                                
                                    </div>
                                    <div className=" col-md-1">
                                         <div class="d-flex flex-column">
                                             <div class="p-2">Intereses</div>
                                             <div class="p-2">{this.props.quantity*0.12}</div>
                                         </div>
                                         
                                    </div>
                                    <div className=" col-md-1">
                                         <div class="d-flex flex-column">
                                             <div class="p-2">Total a pagar</div>
                                             <div class="p-2">{Math.round(this.props.quantity*1.12)}</div>
                                         </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>

                    </div>

                </div>


              </div>
            </div>
              
                        
        )
    }
}


export default App;