import React from 'react';


const stepTwo = ({ nextStep, dataValues }) => {
  const name = React.createRef();
  const lastName = React.createRef();
  const email = React.createRef();
  const dni = React.createRef();
  const mobile = React.createRef();
  const ruc = React.createRef();
  const codeClient = React.createRef();
  const tradeItem = React.createRef();
  const password = React.createRef();

  const continueHandler = (e) => {
    e.prevent.default();
    nextStep();

    const values = {
      name: name.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      dni: dni.current.value,
      mobile: mobile.current.value,
      ruc: ruc.current.value,
      codeClient: codeClient.current.value,
      tradeItem: tradeItem.current.value,
      password: password.current.value,
    };

    dataValues(values);
  };

  return (
    <>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={() => continueHandler}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="nombre" ref={name} type="text" />
                <label htmlFor="nombre">nombre:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="Apellido" ref={lastName} type="text" />
                <label htmlFor="Apellido">Apellido:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="Email" ref={email} type="text" />
                <label htmlFor="Email">Email:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="DNI" ref={dni} type="text" />
                <label htmlFor="DNI">DNI:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="Celular" ref={mobile} type="text" />
                <label htmlFor="Celular">Celular:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="RUC" ref={ruc} type="text" />
                <label htmlFor="RUC">RUC:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="code-client" ref={codeClient} type="text" />
                <label htmlFor="code-client">Código del Cliente VisaNet:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="rubro" ref={tradeItem} type="text" />
                <label htmlFor="rubro">Rubro del negogio:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="password" ref={password} type="text" />
                <label htmlFor="password">password:</label>
              </div>

              <div className="">
                <input type="submit" className="" value="SOLICITAR" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default stepTwo;
