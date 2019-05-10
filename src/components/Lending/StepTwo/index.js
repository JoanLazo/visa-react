import React from 'react';
import useForm from 'react-hook-form';
import './StepTwo.css';


const StepTwo = ({ nextStep, inputValues }) => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    inputValues(data);
    nextStep();
  }; // callback when validation pass

  return (
    <div className="container">
      <div className=" d-flex justify-content-center">
        <img className="mb-2 mt-2" src="https://i.ibb.co/52dMDFd/barra-de-pasos-5.png" />

      </div>
      <div className="card mt-5">
        <div className="row">
          <h3 className="col-sm-12 text-center">INGRESA TUS DATOS</h3>
          <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>

            <div className="row justify-content-lg-center">
              <div className="form-group col-sm-3">
                <label htmlFor="firstname">NOMBRE:</label><br />
                <input
                  className="input-border"
                  placeholder="firstname"
                  name="firstname"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z]{1}[a-z]{5,}$/,
                      message: 'La primera Letra debe ser Mayúscula, solo se admiten letras',
                    },
                  })}
                /> {/* register an input */}
                {errors.firstname && errors.firstname.message} {/* error message */}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="lastname">APELLIDOS:</label><br />
                <input
                  className="input-border"
                  placeholder="lastname"
                  name="lastname"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z]{1}[a-z]{5,}$/,
                      message: 'La primera Letra debe ser Mayúscula, solo se admiten letras',
                    },
                  })}
                /> {/* apply required validation */}
                {errors.lastname && errors.firstname.message} {/* error message */}
              </div>

            </div>

            <div className="row justify-content-lg-center">
              <div className="form-group col-sm-3">
                <label htmlFor="email">EMAIL: </label><br />
                <input
                  className="input-border"
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />
                {errors.email && errors.email.message}
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="dni">DNI:</label><br />
                <input className="input-border" placeholder="dni" name="dni" ref={register({ pattern: /\d+/, maxLength: 8 })} /> {/* apply pattern validation */}
                {errors.dni && 'Please enter number for dni. Max. 8'} {/* error message */}
              </div>


            </div>

            <div className="row justify-content-lg-center">
              <div className="form-group col-sm-3">
                <label htmlFor="celular">CELULAR:</label><br />
                <input className="input-border" placeholder="celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} /> {/* apply pattern validation */}
                {errors.celular && 'Please enter number for celular. Max. 9'} {/* error message */}

              </div>

              <div className="form-group col-sm-3">

                <label htmlFor="ruc">RUC:</label><br />
                <input className="input-border" placeholder="ruc" name="ruc" ref={register({ pattern: /\d+/, maxLength: 10 })} /> {/* apply pattern validation */}
                {errors.ruc && 'Please enter number for ruc. Max. 10'} {/* error message */}
              </div>
            </div>

            <div className="row justify-content-lg-center">
              <div className="form-group col-sm-3">

                <input className="input-border" placeholder="code" name="code" ref={register({ pattern: /\d+/, maxLength: 9 })} /> {/* apply pattern validation */}
                {errors.code && 'Please enter number for code. Max. 9'} {/* error message */}
              </div>
              <div className="form-group col-sm-3">
                <input className="input-border" placeholder="rubro" name="rubro" ref={register} />
              </div>

            </div>

            <div className="row justify-content-lg-center">
              <div className="form-group col-sm-3">
                <input
                  className="input-border"
                  placeholder="password"
                  name="password"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,15}$/,
                      message: 'Min 6 caracteres – max 15 caracteres, debe tener como min 1 número y una mayúscula',
                    },
                  })}
                /> {/* apply required validation */}
                {errors.password && errors.password.message} {/* error message */}
              </div>

              <div className="form-group col-sm-3">
                <input className="input-border" type="checkbox" id="cbox1" value="checkbox" />
                <label htmlFor="cbox1">No soy cliente Visanet</label>

              </div>
            </div>

            <div className="form-group text-center m-5">
              <input className="btn btn-secondary btn-lg" value="SOLICITAR" type="submit" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
