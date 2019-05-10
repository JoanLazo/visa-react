import React from 'react';

const filterChoice = ({
  quantity, addMoney, subtractMoney, time, onChange,
}) => (
  <div className="container my-5">
    <div className="container mt-20">
      <div className="row  justify-content-around">
        <div className="col-md-3">
          <p className="questions">¿Cúanto dinero necesitas?</p>
          <div className="container">
            <div className="row justify-content-between">
              <button type="button" className="col-2 color-patito d-flex justify-content-center align-items-center" onClick={() => addMoney(quantity)}>
                <p className="bold-white">+</p>
              </button>
              <div className="col-7 color-div d-flex justify-content-center align-items-center">S/
                {quantity}
              </div>
              <button type="button" className="col-2 color-patito d-flex justify-content-center align-items-center" onClick={() => subtractMoney(quantity)}>
                <p className="bold-white ">-</p>
              </button>
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
      </div>
    </div>
  </div>
);

export default filterChoice;
