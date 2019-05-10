import React from 'react';
import useForm from 'react-hook-form';

const StepTwo = ({ nextStep, inputValues }) => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    inputValues(data);
    nextStep();
  }; // callback when validation pass

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="firstname"
        name="firstname"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z]{1}[a-z]{9}$/,
            message: 'La primera Letra debe ser Mayúscula, solo se admiten letras',
          },
        })}
      /> {/* register an input */}
      {errors.firstname && errors.firstname.message} {/* error message */}
      <input
        placeholder="lastname"
        name="lastname"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z]{1}[a-z]{9}$/,
            message: 'La primera Letra debe ser Mayúscula, solo se admiten letras',
          },
        })}
      /> {/* apply required validation */}
      {errors.lastname && errors.firstname.message} {/* error message */}
      <input
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

      <input placeholder="dni" name="dni" ref={register({ pattern: /\d+/, maxLength: 8 })} /> {/* apply pattern validation */}
      {errors.dni && 'Please enter number for dni. Max. 8'} {/* error message */}
      <input placeholder="celular" name="celular" ref={register({ pattern: /\d+/, maxLength: 9 })} /> {/* apply pattern validation */}
      {errors.celular && 'Please enter number for celular. Max. 9'} {/* error message */}
      <input placeholder="ruc" name="ruc" ref={register({ pattern: /\d+/, maxLength: 10 })} /> {/* apply pattern validation */}
      {errors.ruc && 'Please enter number for ruc. Max. 10'} {/* error message */}
      <input placeholder="code" name="code" ref={register({ pattern: /\d+/, maxLength: 9 })} /> {/* apply pattern validation */}
      {errors.code && 'Please enter number for code. Max. 9'} {/* error message */}
      <input placeholder="rubro" name="rubro" ref={register} />
      <input
        placeholder="password"
        name="password"
        ref={register({
          required: true,
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
            message: 'Min 6 caracteres – max 15 caracteres, debe tener como min 1 número y una mayúscula',
          },
        })}
      /> {/* apply required validation */}
      {errors.password && errors.password.message} {/* error message */}

      <input type="submit" />
    </form>
  );
};

export default StepTwo;
